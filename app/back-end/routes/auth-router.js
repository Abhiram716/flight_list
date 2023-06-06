import express from 'express';
import { createAcessToken } from '../controllers/acess-token-controller.js';

const authRouter = express.Router();

authRouter.post('/', createAcessToken);

export default authRouter;