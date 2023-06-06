import express from 'express'
import {
  getFlights,
  createFlightsList,
  deleteFlightLists
} from '../controllers/flight-list-controller.js'

const flightsRouter = express.Router()

flightsRouter.get('/', getFlights);

flightsRouter.get('/createFlightsList', createFlightsList);

flightsRouter.get('/deleteFlightLists', deleteFlightLists);

export default flightsRouter;
