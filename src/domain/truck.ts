/* eslint-disable prettier/prettier */
import { AggregateRoot } from "../core/domain/AggregateRoot"
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface TruckProps {
  year: number;
  month: number;
  tare: number;
  batteryCapacity: number;
  totalBatterycapacity: number;
  AutonomyWithMaximumLoad: number;
  batteryChargingTime: number;
}

export class Truck extends AggregateRoot<TruckProps>{
  enroll: any;
  get id(): UniqueEntityID {
    return this._id;
  }
  get year(): number {
    return this.props.year;
  }
  get month(): number {
    return this.props.month;
  }
  get tare(): number {
    return this.props.tare;
  }
  get batteryCapacity(): number {
    return this.props.batteryCapacity;
  }
  get totalBatterycapacity(): number {
    return this.props.totalBatterycapacity;
  }
  get AutonomyWithMaximumLoad(): number {
    return this.props.AutonomyWithMaximumLoad;
  }
  get batteryChargingTime(): number {
    return this.props.batteryChargingTime;
  }

  private constructor(props:TruckProps, id?: UniqueEntityID) {
  super (props, id);
  }
  static create(props:TruckProps, id?: UniqueEntityID): Result<Truck> {
    const guardedProps = [
      { argument: props.year, argumentName: 'year' },
      { argument: props.month, argumentName: 'month' },
      { argument: props.tare, argumentName: 'tare' },
      { argument: props.batteryCapacity, argumentName: 'batetery capacity'},
      {argument: props.totalBatterycapacity, argumentName: 'total batetery capacity'},
      {argument: props.AutonomyWithMaximumLoad, argumentName: 'autonomy with maximum load'},
      {argument: props.batteryChargingTime, argumentName: 'batetery Charging timer'},
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

    if (!guardResult.succeeded) {
      return Result.fail<Truck>(guardResult.message);
    } else {
      const truck = new Truck(
        {
          ...props,
        },
        id,
      );

      return Result.ok<Truck>(truck);
    }
  }
}
