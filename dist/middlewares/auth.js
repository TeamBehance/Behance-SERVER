"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const statusCode_1 = __importDefault(require("../modules/statusCode"));
const util_1 = __importDefault(require("../modules/util"));
const responseMessage_1 = __importDefault(require("../modules/responseMessage"));
const config_1 = __importDefault(require("../config"));
exports.default = (req, res, next) => {
    var _a;
    const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(' ').reverse()[0];
    // 토큰 유무 검증
    if (!token) {
        return res.status(statusCode_1.default.UNAUTHORIZED).send(util_1.default.fail(statusCode_1.default.UNAUTHORIZED, responseMessage_1.default.NULL_VALUE_TOKEN));
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret); // verify
        req.body.user = decoded.user;
        next(); // next -> middleware 실행 끝나면 다음으로 넘어가게
    }
    catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(statusCode_1.default.UNAUTHORIZED).send(util_1.default.fail(statusCode_1.default.UNAUTHORIZED, responseMessage_1.default.INVALID_TOKEN));
        }
        res.status(statusCode_1.default.INTERNAL_SERVER_ERROR).send(util_1.default.fail(statusCode_1.default.INTERNAL_SERVER_ERROR, responseMessage_1.default.INTERNAL_SERVER_ERROR));
    }
};
//# sourceMappingURL=auth.js.map