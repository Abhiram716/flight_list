import express from 'express';
import getFlights from '../controllers/flight-list-controller.js';

const router = express.Router();

router.get('/', getFlights);

export default router;
