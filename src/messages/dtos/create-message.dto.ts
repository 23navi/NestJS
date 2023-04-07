import {IsString} from "class-validator"

export class CreateMessageDto{
    @IsString()
    constent:string
}