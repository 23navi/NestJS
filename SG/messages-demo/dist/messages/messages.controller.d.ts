import { CreateMessageDto } from "./dtos/create-message.dto";
export declare class MessagesController {
    listMessages(): string;
    createMessage(body: CreateMessageDto): string;
}
