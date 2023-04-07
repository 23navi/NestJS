import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {CreateMessageDto} from "./dtos/create-message.dto";


@Controller('messages')
export class MessagesController{
    @Get('/')
    listMessages(){
       return "Heloo";
    }
    @Post("/")
    createMessage(@Body() body: CreateMessageDto){
      // console.log(body instanceof CreateMessageDto)  // giving false?? yyyy 
      console.log(body);
      return ""
    }
    
   }
   