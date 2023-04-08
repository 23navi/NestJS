"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessagesService {
    constructor() {
        this.messagesRepo = new messages_repository_1.MessagesRepository();
    }
    async findOne(id) {
        return await this.messagesRepo.findOne(id);
    }
    async findAll() {
        return await this.messagesRepo.findAll();
    }
    async create(message) {
        return await this.messagesRepo.create(message);
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map