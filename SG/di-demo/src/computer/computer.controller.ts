import { Controller,Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';

@Controller('computer')
export class ComputerController {
    constructor(private diskService:DiskService, private cpuService:CpuService){}
    @Get("/")
    getRoot(){

        return "Sum of 2+3 is "+ this.cpuService.compute(2,3);
    }
}

