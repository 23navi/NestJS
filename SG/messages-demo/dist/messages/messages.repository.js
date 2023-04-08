"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const promises_1 = require("fs/promises");
class MessagesRepository {
    async findAll() {
        const content = (0, promises_1.readFile)("messages.json", "utf8");
        return content;
    }
    async findOne(id) {
        const content = await (0, promises_1.readFile)("messages.json", "utf8");
        const messages = JSON.parse(content);
        return messages[id];
    }
    async create(message) {
        const contents = await (0, promises_1.readFile)("messages.json", "utf8");
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 10000);
        messages[id] = { id, message };
        await (0, promises_1.writeFile)("messages.json", JSON.stringify(messages));
        return { id };
    }
}
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map