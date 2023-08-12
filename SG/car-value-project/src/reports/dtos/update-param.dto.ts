import { IsNumber, IsString, IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UpdateParamDto {
  // @Transform(({ value }) => {
  //   console.log(value);
  //   return parseInt(value);
  // })

  @Type(() => Number)
  @IsNumber()
  id: number;
}
