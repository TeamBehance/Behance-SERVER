"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProjectSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    writer: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.default.model('Project', ProjectSchema);
//# sourceMappingURL=Project.js.map