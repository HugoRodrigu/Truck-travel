import { ITruckPersistence } from '../dataschema/ITruckPersistence';
import ITruckRepo from '../services/IRepos/ITruckRepo';
import { Truck } from '../domain/truck';
import { Inject, Service } from 'typedi';
import { Document } from 'mongodb';
import { Model } from 'mongoose';

@Service()
export default class TruckRepo implements ITruckRepo {
  private models: any;
  constructor(
    @Inject('truckShema') private truckShema: Model<ITruckPersistence & Document>,
    @Inject('logger') private logger,
  ) {}

  save(truck: Truck): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  update(truck: Truck): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  delete(truck: Truck): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  get(id: string): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Truck[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  getByTruckId(id: string): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  getByTruckName(name: string): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  getByTruckIdAndTruckName(id: string, name: string): Promise<Truck> {
    throw new Error('Method not implemented.');
  }
  exists(t: Truck): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
