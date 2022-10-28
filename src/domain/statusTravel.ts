import { ValueObject } from '../core/domain/ValueObject';
import { Guard } from '../core/logic/Guard';
import { Result } from '../core/logic/Result';

interface StatusTravelProps {
  value: string;
}

export class Status extends ValueObject<StatusTravelProps> {
  get value(): string {
    return this.props.value;
  }
  private constructor(props_: StatusTravelProps) {
    super(props_);
  }

  public createStatusTravel(status: Status): Result<Status> {
    const guardResult = Guard.againstNullOrUndefinedBulk(status, 'status');
    if (guardResult.hasErrors()) {
      return Result.fail<Status>(guardResult.message);
    } else {
      return Result.ok<Status>(new Status({ value: status }));
    }
  }
}
