import express from 'express';
import { getFlights, createFlightDetails } from '../controllers/flight-list-controller.js';

const router = express.Router();

router.get('/', getFlights);

router.post('/create',createFlightDetails);

export default router;
