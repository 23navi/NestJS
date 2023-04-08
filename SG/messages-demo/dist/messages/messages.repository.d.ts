export declare class MessagesRepository {
    findAll(): Promise<string>;
    findOne(id: string): Promise<any>;
    create(message: string): Promise<{
        id: number;
    }>;
}
