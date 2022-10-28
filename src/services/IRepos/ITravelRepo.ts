import { Result } from '../../core/logic/Result';
import {ITravelDTO} from '../../dto/ITravelDTO';

export default interface ITravelService {
  getTravel(travelDTO: ITravelDTO): Promise<Result<ITravelDTO>>;
  saveTravel(travelDTO: ITravelDTO): Promise<Result<ITravelDTO>>;
  deleteTravel(travelDTO: ITravelDTO): Promise<Result<{}>>;
  getTravels(offset: number, limit: number, travelDTO: ITravelDTO): Promise<Result<ITravelDTO>>;
}
