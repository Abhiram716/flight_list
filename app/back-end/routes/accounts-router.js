import express from 'express';
import {
  createAccount,
  createFakeAccounts,
} from '../controllers/account-controller.js';


const accountRouter = express.Router();

accountRouter.get('/fake-accounts', createFakeAccounts);

accountRouter.post('/', createAccount);

export default accountRouter;
