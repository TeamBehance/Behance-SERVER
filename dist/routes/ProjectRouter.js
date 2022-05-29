"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const ProjectController_1 = __importDefault(require("../controllers/ProjectController"));
const router = express_1.default.Router();
router.post('/ios', [
    (0, express_validator_1.body)('title').notEmpty(),
    (0, express_validator_1.body)('photo').notEmpty(),
    (0, express_validator_1.body)('writer').notEmpty(),
], ProjectController_1.default.createProject);
router.post('/android', [
    (0, express_validator_1.body)('title').notEmpty(),
    (0, express_validator_1.body)('photo').notEmpty(),
    (0, express_validator_1.body)('writer').notEmpty(),
], ProjectController_1.default.createProject_android);
router.get('/', ProjectController_1.default.getProjects);
exports.default = router;
//# sourceMappingURL=ProjectRouter.js.map