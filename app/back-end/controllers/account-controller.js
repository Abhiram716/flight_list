import accounts from '../models/accounts';

const createAccount = async (req, res) => {
	try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingAccount = await Account.findOne({ username });
    if (existingAccount) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new account
    const newAccount = new Account({
      username,
      hashedPassword,
    });

    // Save the account to the database
    await newAccount.save();

    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createAccount };
