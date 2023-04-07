import {Get, Controller} from "@nestjs/common";

@Controller("/")
export class AppController{
    @Get("/abc")
    getRooabcRoute(){
        return "ABC";
    }
    @Get("/xyz")
    getRootxyzRoute(){
        return "XYZ";
    }
    @Get("/")
    getRootRoute(){
        return "Hellooo";
    }

}
