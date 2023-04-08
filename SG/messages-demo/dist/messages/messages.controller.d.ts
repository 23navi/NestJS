import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messageService: MessagesService;
    constructor(messageService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: CreateMessageDto): Promise<{
        id: number;
    }>;
    getMessage(id: string): Promise<any>;
}
