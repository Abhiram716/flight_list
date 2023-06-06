import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/flight-list-router.js';
import accountRouter from './routes/accounts-router.js';

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

app.use('/flights_list', router);

app.use('/accounts', accountRouter);

app.get('/', async (req, res) => {
  res.send('Hello world');
});
app.listen(process.env.PORT | 8000);
