import { Transform, Expose } from 'class-transformer';
export class ReturnReportDto {
  @Expose()
  price: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  @Expose()
  approved: boolean;

  @Expose()
  id: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
