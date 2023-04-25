import { UseInterceptors,NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { classToPlain } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //run before the handler
        console.log("Running before the handler");
        console.log(context);

        return handler.handle().pipe(
            map((data:any)=>{
                //run after the req handler
                console.log("Running after the handler");
                console.log(data);
            })
        )
    }
}

