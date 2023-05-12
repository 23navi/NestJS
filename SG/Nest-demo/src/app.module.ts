import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { SecController } from "./sec.controller";
@Module({controllers:[AppController,SecController]})
export class AppModule{

}
