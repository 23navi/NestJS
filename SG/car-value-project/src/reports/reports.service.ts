import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(createReport: CreateReportDto, user: User) {
    const report = this.repo.create(createReport);
    console.log('User: ' + user);
    report.user = user;
    console.log('Report: ' + report);
    return this.repo.save(report);
  }

  findAll() {
    return this.repo.find();
  }
}
