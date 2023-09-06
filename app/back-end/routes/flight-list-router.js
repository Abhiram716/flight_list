import express from 'express';
import {
  getFlights,
  createFlightDetails,
} from '../controllers/flight-list-controller.js';
import authenticateUser from '../middleware/authenticateUser.js';
const router = express.Router();

router.get('/getFlights', authenticateUser, getFlights);

router.post('/createFlights', authenticateUser, createFlightDetails);

export default router;
