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
const responseMessage_1 = __importDefault(require("../modules/responseMessage"));
const statusCode_1 = __importDefault(require("../modules/statusCode"));
const util_1 = __importDefault(require("../modules/util"));
const StoryService_1 = __importDefault(require("../services/StoryService"));
/**
 * @route GET /story
 * @desc Get Stories
 * @access Public
 */
const getStories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield StoryService_1.default.getStories();
        if (data.length === 0) {
            return res
                .status(statusCode_1.default.NOT_FOUND)
                .send(util_1.default.fail(statusCode_1.default.NOT_FOUND, responseMessage_1.default.NOT_FOUND_STORY));
        }
        res
            .status(statusCode_1.default.OK)
            .send(util_1.default.success(statusCode_1.default.OK, responseMessage_1.default.READ_STORY_SUCCESS, data));
    }
    catch (error) {
        console.log(error);
        res
            .status(statusCode_1.default.INTERNAL_SERVER_ERROR)
            .send(util_1.default.fail(statusCode_1.default.INTERNAL_SERVER_ERROR, responseMessage_1.default.INTERNAL_SERVER_ERROR));
    }
});
exports.default = { getStories };
//# sourceMappingURL=StoryController.js.map