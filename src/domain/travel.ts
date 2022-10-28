import { AggregateRoot } from '../core/domain/AggregateRoot';
import { UniqueEntityID } from '../core/domain/UniqueEntityID';
import { Result } from '../core/logic/Result';
import { TravelId } from './travelId';
import { Guard } from '../core/logic/Guard';

interface TravelProps {
  departureDate: Date;
  arrivalDate: Date;
  departureTime: string;
  arrivalTime: string;
  departureLocation: string;
  arrivalLocation: string;
  status: string;
}

export class Travel extends AggregateRoot<TravelProps> {
  email: any;
  get id(): UniqueEntityID {
    return this._id;
  }

  get travelId(): TravelId {
    return TravelId.caller(this.id);
  }

  get departureDate(): Date {
    return this.props.departureDate;
  }

  get arrivalDate(): Date {
    return this.props.arrivalDate;
  }

  get departureTime(): string {
    return this.props.departureTime;
  }

  get arrivalTime(): string {
    return this.props.arrivalTime;
  }

  get departureLocation(): string {
    return this.props.departureLocation;
  }
  get arrivalLocation(): string {
    return this.props.arrivalLocation;
  }
  get status(): string {
    return this.props.status;
  }

  set status(value: string) {
    this.props.status = value;
  }

  private constructor(props: TravelProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: TravelProps, id?: UniqueEntityID): Result<Travel> {
    const guardedProps = [
      { argument: props.departureDate, argumentName: 'departure date' },
      { argument: props.arrivalDate, argumentName: 'arrival date' },
      { argument: props.departureTime, argumentName: 'departure timer' },
      { argument: props.arrivalTime, argumentName: 'arrivalTime' },
      { argument: props.departureLocation, argumentName: 'departureLocation' },
      { argument: props.arrivalLocation, argumentName: 'arrivalLocation' },
      { argument: props.status, argumentName: 'status' },
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

    if (!guardResult.succeeded) {
      return Result.fail<Travel>(guardResult.message);
    } else {
      const travel = new Travel(
        {
          ...props,
        },
        id,
      );

      return Result.ok<Travel>(travel);
    }
  }
}
