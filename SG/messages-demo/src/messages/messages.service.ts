import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    // Bad approach.. We are creating an internal dependency to our MessagesService
    messagesRepo:MessagesRepository
    constructor(){
        this.messagesRepo=new MessagesRepository();
    }
    async findOne(id:string){
        return this.messagesRepo.findOne(id);
    }
    async findAll(){
        return this.messagesRepo.findAll();
    }
    async create(message:string){
        return this.messagesRepo.create(message);
    }
}