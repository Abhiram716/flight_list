import express from 'express';
import { createAccount } from '../controllers/account-controller.js';

const accountRouter = express.Router();

accountRouter.post('/signup', createAccount);

export default accountRouter;
