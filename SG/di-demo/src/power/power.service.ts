import { Injectable } from '@nestjs/common';


@Injectable()
export class PowerService {
    constructor(){}
    supplyPower(power:number){
        console.log("Supplying "+power);
    }
}
