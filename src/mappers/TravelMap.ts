import { Container } from 'typedi';
import { Mapper } from '../core/infra/Mapper';
import { Travel } from '../domain/travel';
import ITravelDTO from '../dto/ITravelDTO';

export class TravelMap extends Mapper<Travel> {
  public static toDto(travel: Travel): ITravelDTO {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    return {
      id: travel.id,
      departureDate: travel.departureDate,
      arrivalDate: travel.arrivalDate,
      departureTime: travel.departureTime,
      arrivalTime: travel.arrivalTime,
      departureLocation: travel.departureLocation.toString(),
      arrivalLocation: travel.arrivalLocation.toString(),
      status: travel.status.toString(),
    } as ITravelDTO;
  }
  public static toPersistence(travel: Travel): any {
    const persistenciaDadosTravel = {
      domainId: travel.id.toString(),
      arrivalDate: travel.arrivalDate.value,
      password: travel.password.value,
      firstName: travel.firstName,
      lastName: travel.lastName,
      status: travel.status.id.toValue(),
    };
    return persistenciaDadosTravel;
  }
}
