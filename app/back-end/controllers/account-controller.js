import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import accounts from '../models/accounts.js';

const createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingAccount = await accounts.findOne({ username });
    if (existingAccount) {
      return res.status(400).json({ error: 'Username already exists' });
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

const createFakeAccounts = async (req, res) => {
  try {
    let fakeAcounts = [];
    for (let i = 0; i < 20; i++) {
      const fakeAcount = {
        username: faker.person.fullName(),
        hashedPassword: faker.internet.password({ length: 10 }),
      };
      fakeAcounts.push(fakeAcount);
    }

    await accounts.insertMany(fakeAcounts);
    res.status(201).send('Sucsess');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const deletAccounts = async (req, res) => {
  try {
    await accounts.deleteMany({}); // Delete all documents in the "flights" collection
    res.status(200).json({ message: 'All documents deleted successfully.' });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

export { createAccount, createFakeAccounts, deletAccounts };
