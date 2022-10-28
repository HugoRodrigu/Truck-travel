import { ITravelPersistence } from '../../dataschema/ITravelPersistence';
import mongoose from 'mongoose';

const Travel = new mongoose.Schema(
  {
    idTravel: {
      type: String,
      unique: true,
    },

    departureDate: {
      type: Date,
      required: [true, 'Please enter first departure date'],
      index: true,
    },

    arrivalDate: {
      type: Date,
      required: [true, 'Please enter arrival date'],
      index: true,
    },

    departureTime: {
      type: String,
      required: [true, 'Please enter arrival date'],
      index: true,
    },
    arrivalTime: {
      type: String,
      required: [true, 'Please enter arrival time'],
      index: true,
    },
    departureLocation: {
      type: String,
      required: [true, 'Please enter departure location'],
      index: true,
    },
    arrivalLocation: {
      type: String,
      required: [true, 'Please enter arrival location'],
      index: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<ITravelPersistence & mongoose.Document>('Travel', Travel);
