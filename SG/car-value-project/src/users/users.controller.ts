import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Session,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from './auth.service';

@Controller('/auth')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}



  @Serialize(UserDto)
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const {email, password}= body
    const user = await this.authService.signup(email,password);
    session.userId = user.id;
    return user;
  }

  @Serialize(UserDto)
  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) { // Note : we are using CreateUserDto bec it satify our need.. we can create a signup user dto... for more clearity 
    const{email,password}= body;
    const user= await this.authService.signin(email,password);
    session.userId = user.id;
    return user;
  } 

  @Serialize(UserDto)
  // @UseInterceptors(new SerializeInterceptor(UserDto))
  // @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async findUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
}
