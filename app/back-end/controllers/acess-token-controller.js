import jwt from 'jsonwebtoken';
import accounts from '../models/accounts.js';

const createAcessToken = async (req, res) => {
  //   const { username, password } = req.body;

  //   // Check if the account exists in the database
  //   const account = await accounts.findOne({ username });

  //   // If account not found, return error
  //   if (!account) {
  //     return res.status(401).json({ error: 'Account not found' });
  //   }

  //   // Compare the provided password with the hashed password in the database
  //   // const isPasswordValid = await bcrypt.compare(
  //   //   password,
  //   //   account.hashedPassword,
  //   // );

  //   // If password is invalid, return error
  //   //  if (!user || !user.validatePassword(password)) {
  //   //    return res.status(401).json({ error: 'Invalid username or password' });
  //   //  }

  //   // Create the payload for the access token
  //   const payload = { accountId: account._id, username: account.username };

  //   // Generate the access token
  //   const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
  //     expiresIn: null, // Set the token expiration time (e.g., 1 hour)
  //   });

  //   // Return the access token to the client
  //   res.status(200).json({ accessToken });
  // } catch (error) {
  //   console.error('Error logging in:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
  try {
    const { username, password } = req.body;

    // Check if the account exists in the database
    const account = await accounts.findOne({ username });

    // If account not found, return error
    if (!account) {
      return res.status(401).json({ error: 'Account not found' });
    }

    // Compare the provided password with the password in the database
    if (account.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create the payload for the access token
    const payload = { accountId: account._id, username: account.username };

    // Generate the access token
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h', // Set the token expiration time (e.g., 1 hour)
    });

    // Return the access token to the client
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createAcessToken };
