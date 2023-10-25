import { IsNumber, IsString, IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UpdateParamDto {
  @Type(() => Number)
  @Transform(({ value }) => {
    console.log(value);
    return parseInt(value);
  })
  @IsNumber()
  id: number;
}
