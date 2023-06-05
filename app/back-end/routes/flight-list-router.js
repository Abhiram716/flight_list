import express from 'express'
import {
  getFlights,
  createFlightsList,
  deleteFlightLists
} from '../controllers/flight-list-controller.js'

const router = express.Router()

router.get('/', getFlights)

router.get('/createFlightsList', createFlightsList)

router.get('/deleteFlightLists', deleteFlightLists)

export default router
