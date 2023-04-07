import {Get, Controller} from "@nestjs/common";

@Controller("/sec")
export class SecController{
    @Get("/1")
    getRooabcRoute(){
        return "sec 3";
    }
    @Get("/2")
    getRootxyzRoute(){
        return "sec 2";
    }
    @Get("/")
    getRootRoute(){
        return "Sec Hello";
    }

}
