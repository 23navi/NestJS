import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
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
  createUser(@Body() body: CreateUserDto) {
    const {email, password}= body
    return this.authService.signup(email,password);
  }

  @Serialize(UserDto)
  // @UseInterceptors(new SerializeInterceptor(UserDto))
  // @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async findUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
}
