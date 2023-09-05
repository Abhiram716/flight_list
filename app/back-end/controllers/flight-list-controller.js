import flights from '../models/flights.js';

const getFlights = async (req, res) => {
  const { source, destination, date } = req.body;
  try {
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

    if (Tempflight.length === 0) {
      return res.status(404).json({ error: 'No flights found.' });
    }

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
  const { source, destination, date, flightsList } = req.body;

  if (
    source === undefined ||
    destination === undefined ||
    date === undefined ||
    !flightsList ||
    flightsList.length === 0
  ) {
    return res.status(400).json({ error: 'Missing required field.' });
  }
  try {
    const existingFlight = await flights.findOne({ source, destination, date });

    if (existingFlight) {
      return res.status(409).json({ error: 'Flight already exists.' });
    }

    const newFlightDetails = new flights(req.body);
    await newFlightDetails.save();
    res.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getFlights, createFlightDetails };
