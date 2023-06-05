import flights from '../models/flights.js';

const getFlights = async (req, res) => {
  try {
    const { source, destination, date } = req.body;

    const Tempflight = await flights.find({
      source: source,
      destination: destination,
      date: date,
    });

    const flightData = {};

    Tempflight.forEach((flight) => {
      flight.flightsList.forEach(({ company, price }) => {
        flightData[company] = price;
      });;
    });

    res.status(200).json(flightData);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
};



export { getFlights };
