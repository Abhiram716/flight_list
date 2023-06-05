import mongoose from 'mongoose'

const flightSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  flights: [
    {
      company: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ]
})

export default mongoose.model('Flights', flightSchema)
