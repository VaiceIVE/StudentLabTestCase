"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    payload: [{ type: Object, required: true }]
});
exports.default = (0, mongoose_1.model)('Feedbacks', feedbackSchema);
