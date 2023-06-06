import express from 'express';
import { createAccount } from '../controllers/account-controller';

const accountRouter = express.Router();

router.post('/', createAccount);

export default accountRouter;
