import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService:PowerService){}
    compute(a:number,b:number){
        console.log("Drawing 5 unit of power for computation")
        this.powerService.supplyPower(5);
        return a+b
    }
}
