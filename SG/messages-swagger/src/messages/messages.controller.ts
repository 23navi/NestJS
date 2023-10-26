import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}
  @Get('/')
  listMessages() {
    return this.messageService.findAll();
  }
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    // type: String,
    description: 'message id',
  })
  @ApiNotFoundResponse({
    description: 'message not found',
  })
  // @ApiResponse({
  //   status:404,

  // })
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
