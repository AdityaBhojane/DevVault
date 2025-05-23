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
exports.signInController = exports.signUpController = void 0;
const authService_1 = require("../service/authService");
const customSuccess_1 = require("../utils/customSuccess");
const customError_1 = __importDefault(require("../utils/customError"));
const http_status_codes_1 = require("http-status-codes");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, authService_1.userSingUpService)(req.body);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("Date fetched Successfully", response));
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.signUpController = signUpController;
const signInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, authService_1.userSingInService)(req.body);
        res.status(200).json((0, customSuccess_1.customSuccussResponse)("sign in successful", response));
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.signInController = signInController;
