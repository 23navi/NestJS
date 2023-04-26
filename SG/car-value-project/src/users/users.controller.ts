import { Controller, Post, Body,Get,Patch,Delete, UseInterceptors, ClassSerializerInterceptor, Param} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';



@Controller('/auth')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post("/signup")
    createUser(@Body() body: CreateUserDto){
        return this.userService.create({...body});
    }

    @UseInterceptors(new SerializeInterceptor(UserDto))
    // @UseInterceptors(ClassSerializerInterceptor)
    @Get("/:id")
    async findUser(@Param ("id") id:number){
        console.log("Handler is running");
        return this.userService.findOne(id);
    } 
}
