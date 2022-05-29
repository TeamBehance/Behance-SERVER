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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const File_1 = __importDefault(require("../models/File"));
const Project_1 = __importDefault(require("../models/Project"));
const User_1 = __importDefault(require("../models/User"));
const Story_1 = __importDefault(require("../models/Story"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.default.mongoURI);
        mongoose_1.default.set('autoCreate', true);
        console.log('Mongoose Connected ...');
        User_1.default.createCollection().then(function (collection) {
            console.log('User collection created');
        });
        Project_1.default.createCollection().then(function (collection) {
            console.log('Project Collection Created');
        });
        File_1.default.createCollection().then(function (collection) {
            console.log('File Collection Created');
        });
        Story_1.default.createCollection().then(function (collection) {
            console.log('Story Collection Created');
        });
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map