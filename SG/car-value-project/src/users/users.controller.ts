import { Controller, Post, Body,Get,Patch,Delete, UseInterceptors, ClassSerializerInterceptor, Param} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('/auth')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post("/signup")
    createUser(@Body() body: CreateUserDto){
        return this.userService.create({...body});
    }

    // @UseInterceptors(ClassSerializerInterceptor)
    @Get("/:id")
    async findUser(@Param ("id") id:number){
        return this.userService.findOne(id);
    } 
}
