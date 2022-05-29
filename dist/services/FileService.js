"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const s3Config_1 = __importDefault(require("../config/s3Config"));
const File_1 = __importDefault(require("../models/File"));
const fs_1 = __importDefault(require("fs"));
const uploadFileToS3 = (fileData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileContent = fs_1.default.readFileSync(fileData.path);
        const params = {
            Bucket: config_1.default.bucketName,
            Key: fileData.originalname,
            Body: fileContent,
        };
        const result = yield s3Config_1.default.upload(params).promise();
        const file = new File_1.default({
            link: result.Location,
            fileName: fileData.originalname,
        });
        yield file.save();
        const data = {
            _id: file._id,
            link: result.Location,
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    uploadFileToS3,
};
//# sourceMappingURL=FileService.js.map