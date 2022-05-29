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
const Project_1 = __importDefault(require("../models/Project"));
const User_1 = __importDefault(require("../models/User"));
const createProject = (projectInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = new Project_1.default({
            title: projectInfo.title,
            photo: projectInfo.photo,
            writer: projectInfo.writer,
        });
        yield project.save();
        const user = yield User_1.default.findById(projectInfo.writer);
        if (!user) {
            return null;
        }
        const data = {
            _id: project._id,
            title: project.title,
            photo: project.photo,
            writer: {
                name: user.name,
                photo: user.photo,
            },
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const createProject_android = (projectCreateDto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = new Project_1.default(projectCreateDto);
        yield project.save();
        const writer = yield User_1.default.findById(project.writer);
        if (!writer) {
            return null;
        }
        const data = {
            _id: project._id,
            title: project.title,
            photo: project.photo,
            writer: {
                name: writer.name,
                photo: writer.photo,
            },
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find()
            .populate('writer')
            .sort({ createdAt: -1 });
        const data = yield Promise.all(projects.map((project) => {
            const result = {
                _id: project._id,
                title: project.title,
                photo: project.photo,
                writer: {
                    name: project.writer.name,
                    photo: project.writer.photo,
                },
            };
            return result;
        }));
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = { createProject, getProjects, createProject_android };
//# sourceMappingURL=ProjectService.js.map