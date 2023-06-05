/**  eslint disable  import/extensions */
import { faker } from '@faker-js/faker';
import flights from '../models/flights.js';

const getFlights = (req, res) => {};

const createFlightsList = async (req, res) => {
  try {
    const flightsList = [];

    for (let i = 0; i < 20; i += 1) {
      const flight = {
        source: faker.location.city(),
        destination: faker.location.city(),
        date: faker.date.between({
          from: '2024-01-01T00:00:00.000Z',
          to: '2024-05-01T00:00:00.000Z',
        }),
        flights: [],
      };

      const numOfSubFlights = faker.number.int({ min: 1, max: 5 });

      for (let j = 0; j < numOfSubFlights; j += 1) {
        const subFlight = {
          company: faker.company.name(),
          price: faker.commerce.price({ min: 1000, max: 10000 }),
        };

        console.log('--------company:price');
        console.log(subFlight);
        flight.flights.push(subFlight);
        console.log('-----------flight Details--------------');
        console.log(flight);
      }
      flightsList.push(flight);
    }

    await flights.insertMany(flightsList);
    res.status(201).send('Sucsess');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const deleteFlightLists = async (req, res) => {
  try {
    await flights.deleteMany({}); // Delete all documents in the "flights" collection
    res.status(200).json({ message: 'All documents deleted successfully.' });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

export { getFlights, createFlightsList, deleteFlightLists };
