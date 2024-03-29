import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { AuthGuard } from '../guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';

import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReturnReportDto } from './dtos/return-report.dto';
import { UpdateReportDto } from './dtos/update-report.dto';
import { GetEstimationDto } from './dtos/get-estimation.dto';
import { UpdateParamDto } from './dtos/update-param.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getEstimation(@Query() query: GetEstimationDto) {
    return {};
  }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reportsService.findOne(+id);
  // }

  @Patch(':id')
  approveReport(
    @Param() params: UpdateParamDto,
    @Body() updateReport: UpdateReportDto,
  ) {
    console.log('This is running', typeof params);
    return this.reportsService.changeApprove(params.id, updateReport.approved);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportsService.remove(+id);
  // }

  @Post()
  @Serialize(ReturnReportDto)
  @UseGuards(AuthGuard)
  createReport(
    @Body() createReport: CreateReportDto,
    @CurrentUser() user: User,
  ) {
    return this.reportsService.create(createReport, user);
  }

  // @Get('export')
  // export() {
  //   return this.reportsService.export();
  // }
}
