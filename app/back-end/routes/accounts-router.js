import express from 'express';
import {
  createAccount,
  createFakeAccounts,
  deletAccounts,
} from '../controllers/account-controller.js';

const accountRouter = express.Router();

accountRouter.get('/fake-accounts', createFakeAccounts);

accountRouter.get('/delete-accounts', deletAccounts);

accountRouter.post('/', createAccount);

export default accountRouter;
