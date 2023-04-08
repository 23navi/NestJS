export declare class MessagesRepository {
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(message: string): Promise<{
        id: number;
    }>;
}
