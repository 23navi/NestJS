import {
  IsString,
  IsLatitude,
  IsLongitude,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

import { Transform } from 'class-transformer';

export class GetEstimationDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => parseFloat(value))
  @Min(1950)
  @Max(2050)
  @IsNumber()
  year: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
}
