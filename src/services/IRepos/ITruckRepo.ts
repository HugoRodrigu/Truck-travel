import { Repo } from '../../core/infra/Repo';
import { Truck } from '../../domain/truck';

export default interface ITruckRepo extends Repo<Truck> {
  save(truck: Truck): Promise<Truck>;
  update(truck: Truck): Promise<Truck>;
  delete(truck: Truck): Promise<Truck>;
  get(id: string): Promise<Truck>;
  getAll(): Promise<Truck[]>;
  getById(id: string): Promise<Truck>;
  getByTruckId(id: string): Promise<Truck>;
  getByTruckName(name: string): Promise<Truck>;
  getByTruckIdAndTruckName(id: string, name: string): Promise<Truck>;
}
