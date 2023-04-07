import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    constructor(public messagesRepo:MessagesRepository){
        this.messagesRepo=new MessagesRepository();
    }
    async findOne(id:string){
        return await this.messagesRepo.findOne(id);
    }
    async findAll(){
        return await this.messagesRepo.findAll();
    }
    async create(message:string){
        return await this.messagesRepo.create(message);
    }
}