import { Container } from 'typedi';
import { Mapper } from '../core/infra/Mapper';
import { Truck } from '../domain/truck';
import { ITruckDTO } from '../dto/ITruckDTO';

export class TruckMap extends Mapper<Truck> {
  public static toDto(truck: Truck): ITruckDTO[] {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    return {
      id: truck.id.toString(),
      enroll: truck.enroll,
      year: truck.year,
      month: truck.month.valueOf(),
      batteryCapacity: truck.batteryCapacity.valueOf(),
      totalBatterycapacity: truck.totalBatterycapacity,
      AutonomyWithMaximumLoad: truck.AutonomyWithMaximumLoad,
      batteryChargingTime: truck.batteryChargingTime.valueOf(),
    } as ITruckDTO;
  }
  public static toPersistence(truck: Truck): any {
    const persistenciaDadosTruck = {
      domainId: truck.id.toString(),
      enroll: truck.enroll.value,
      year: truck.year.value,
      month: truck.month.value,
      batteryCapacity: truck.batteryCapacity.valueOf(),
      totalBatterycapacity: truck.totalBatterycapacity.valueOf(),
      AutonomyWithMaximumLoad: truck.AutonomyWithMaximumLoad.valueOf(),
      batteryChargingTime: truck.batteryChargingTime.valueOf(),
    };
    return persistenciaDadosTruck;
  }
}
