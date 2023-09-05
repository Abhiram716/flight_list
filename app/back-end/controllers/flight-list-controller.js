import flights from '../models/flights.js';

const getFlights = async (req, res) => {
  try {
    const { source, destination, date } = req.body;

    if (
      source === undefined ||
      destination === undefined ||
      date === undefined
    ) {
      return res.status(400).json({ error: 'Missing required field.' });
    }

    const Tempflight = await flights.find({
      source: source,
      destination: destination,
      date: date,
    });

    const flightData = {};

    Tempflight.forEach((flight) => {
      flight.flightsList.forEach(({ company, price }) => {
        flightData[company] = price;
      });
    });

    res.status(200).json(flightData);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFlightDetails = async (req, res) => {
  try {
    const newFlightDetails = new flights(req.body);
    await newFlightDetails.save();
    res.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getFlights, createFlightDetails };
