import express from 'express';
import router from './flight-list-router';

const accountRouter = express.Router();

router.post('/', createAccount);

export default accountRouter;
