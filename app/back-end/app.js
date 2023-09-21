import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import accountRouter from './routes/accounts-router.js';
import authRouter from './routes/auth-router.js';
import router from './routes/flight-list-router.js';

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
//form-urlencoded

app.use(
  cors({
    origin: function (origin, callback) {
      if (origin === 'http://localhost:3000') {
        callback(null, true);
      } else if (
        /^https:\/\/deploy-preview-\d+--flight-list-client\.netlify\.app$/.test(
          origin,
        )
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }),
);

app.use('/flights', router);

app.use('/accounts', accountRouter);

app.use('/access-tokens', authRouter);

app.get('/', async (req, res) => {
  res.send('Hello world');
});
app.listen(process.env.PORT | 8000);

// testing if netlify will trigger a build if a change is made in back-end folder
// testing if netlify will trigger a build if a change is made in back-end folder
