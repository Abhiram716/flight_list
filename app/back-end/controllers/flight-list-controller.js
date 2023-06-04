import flights from '../models/flights.js';
import { faker } from '@faker-js/faker';

const getFlights = (req, res) => {};

const createFlightsList = async (req, res) => {
  try {
    const flightsList = [];

    for (let i = 0; i < 20; i++) {
      const flight = {
        source: faker.location.city(),
        destination: faker.location.city(),
        date: faker.date.between({
          from: '2024-01-01T00:00:00.000Z',
          to: '2024-05-01T00:00:00.000Z',
        }),
        flightsPair: [],
      };

      const numOfSubFlights = faker.number.int({ min: 1, max: 5 });

      for (let j = 0; j < numOfSubFlights; j++) {
        const subFlight = {
          comapany: faker.company.name(),
          price: faker.commerce.price({ min: 1000, max: 10000 }),
        };
        flight.flightsPair.push(subFlight);
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

// for (let i = 0; i < numOfFlights; i++) {
//   const flight = {
//     source: faker.address.city(),
//     destination: faker.address.city(),
//     date: faker.date.future(),
//     flights: [],
//   };

//   const numOfSubFlights = faker.random.number({ min: 1, max: 5 });

//   for (let j = 0; j < numOfSubFlights; j++) {
//     const subFlight = {
//       company: faker.company.companyName(),
//       price: faker.random.number({ min: 100, max: 1000 }),
//     };
//     flight.flights.push(subFlight);
//   }

//   flights.push(flight);
// }
