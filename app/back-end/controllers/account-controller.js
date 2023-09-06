import bcrypt from 'bcrypt';
import accounts from '../models/accounts.js';

const createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingAccount = await accounts.findOne({ username });
    if (existingAccount) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new account
    const newAccount = new accounts({
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
