import jsonwebtoken from 'jsonwebtoken';

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Access token missing' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const verifiedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
	} catch (e) {
    return res
      .status(401)
      .json({
        error:
          'Invalid authorization header. Expected format is "Bearer <token>".',
      });
		// res.send(e);
  }

  if (req.params.username && verifiedToken.username !== req.params.username) {
    return res.status(401).json({
      error: 'This token is not authorized to access the given resource',
    });
  }

  next();
};

export default authenticateUser;
