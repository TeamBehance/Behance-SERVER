"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
router.post('/upload', multer_1.default.single('file'), controllers_1.FileController.uploadFileToS3);
// router.post('/upload', upload.array('file'), FileController.uploadFilesToS3);
exports.default = router;
//# sourceMappingURL=FileRouter.js.map