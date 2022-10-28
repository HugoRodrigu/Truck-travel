/* eslint-disable @typescript-eslint/camelcase */
import { ITruckPersistence } from '../../dataschema/ITruckPersistence';
import mongoose from 'mongoose';

const Truck = new mongoose.Schema(
  {
    idTruck: {
      type: String,
      unique: true,
    },
    enroll: {
      type: String,
      required: [true, 'Please enter a enroll'],
      index: true,
    },
    year: {
      type: Number,
      required: [true, 'Please enter a year'],
    },
    month: {
      type: Number,
      required: [true, 'Please enter a month'],
    },
    tare: {
      type: Number,
      required: [true, 'Please enter a tare'],
    },
    batteryCapacity: {
      type: Number,
      required: [true, 'Please enter a battery Capacity'],
    },
    totalBatterycapacity: {
      type: Number,
      required: [true, 'Please enter a total battery Capacity'],
    },
    AutonomyWithMaximumLoad: {
      type: Number,
      required: [true, 'Please enter a Autonomy With Maximum Load'],
    },
    batteryChargingTime: {
      type: Number,
      required: [true, 'Please enter a battery Charging Time'],
    },
  },
  { timestamps: true },
);

export default mongoose.model<ITruckPersistence & mongoose.Document>('Truck', Truck);
