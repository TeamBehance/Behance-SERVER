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
const File_1 = __importDefault(require("../models/File"));
const createFile = (link, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = new File_1.default({
            link,
            fileName
        });
        yield file.save();
        const data = {
            _id: file._id,
            link
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const createFiles = (imageList) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Promise.all(imageList.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const file = new File_1.default({
                link: image.location,
                fileName: image.originalname
            });
            yield file.save();
            return {
                _id: file._id,
                link: file.link
            };
        })));
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    createFile,
    createFiles
};
//# sourceMappingURL=FileService.js.map