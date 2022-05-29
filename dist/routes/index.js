"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//router index file
const express_1 = require("express");
const FileRouter_1 = __importDefault(require("./FileRouter"));
const ProjectRouter_1 = __importDefault(require("./ProjectRouter"));
const StoryRouter_1 = __importDefault(require("./StoryRouter"));
const router = (0, express_1.Router)();
router.use('/project', ProjectRouter_1.default);
router.use('/story', StoryRouter_1.default);
router.use('/file', FileRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map