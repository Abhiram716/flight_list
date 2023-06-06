import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import accountRouter from './routes/accounts-router.js';
import authRouter from './routes/auth-router.js';
import flightsRouter from './routes/flight-list-router.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB.');
    // Start your application logic here...
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
// form-urlencoded

app.use('/access-tokens',authRouter);

app.use('/flights_list', flightsRouter);

app.use('/accounts', accountRouter);

app.get('/', async (req, res) => {
  res.send('Hello world');
});
app.listen(process.env.PORT | 8000);
