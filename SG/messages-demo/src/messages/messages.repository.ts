import { writeFile,readFile } from "fs/promises";

export class MessagesRepository{
    async findAll(){
        const content= await readFile("./../../messages.json","utf8");
        const messages= JSON.parse(content);
        return messages;

    }
    async findOne(id:string){
        const content= await readFile("./../../messages.json","utf8");
        const messages= JSON.parse(content);
        return messages[id];

    }
    async create(message:string){
        
        
    }
}