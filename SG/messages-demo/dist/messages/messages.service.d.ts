import { MessagesRepository } from "./messages.repository";
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<string>;
    create(message: string): Promise<{
        id: number;
    }>;
}
