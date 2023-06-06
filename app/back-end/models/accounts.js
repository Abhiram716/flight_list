import mongoose from 'mongoose';

const accounts = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  hasedPassword: {
    type: String,
    required: true,
  },
});

export default mongoose.model('accounts',accounts)