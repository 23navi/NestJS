import { writeFile,readFile } from "fs/promises";

export class MessagesRepository{
    async findAll(){
        const content= await readFile("messages.json","utf8");
        // const content= await readFile("./../../messages.json","utf8");  // Why is this not working???
        const messages= JSON.parse(content);
        return messages;

    }
    async findOne(id:string){
        const content= await readFile("messages.json","utf8");
        const messages= JSON.parse(content);
        return messages[id];

    }
    async create(message:string){
        const contents= await readFile("messages.json","utf8");
        const messages= JSON.parse(contents);
        const id = Math.floor(Math.random()*10000)
        messages[id]={id,message}
        await writeFile("messages.json",JSON.stringify(message));
        return id;
    }
}