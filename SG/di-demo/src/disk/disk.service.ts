import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}
    readData(){
        console.log("Drawing 10 unit of power for reading from the disk")
        this.powerService.supplyPower(10);
        console.log("Reading data from the disk...")
        return "This is your data";
    }
}
