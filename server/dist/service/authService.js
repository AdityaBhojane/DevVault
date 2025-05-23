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
exports.userSingInService = exports.userSingUpService = void 0;
const userRepository_1 = require("../repository/userRepository");
const argon2_1 = __importDefault(require("argon2"));
const ApiError_1 = require("../utils/Error/ApiError");
const http_status_codes_1 = require("http-status-codes");
const tokenSign_1 = require("../helper/tokenSign");
const userSingUpService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, email, password } = data;
        if (!username || !email || !password) {
            throw new ApiError_1.ApiError({ message: "All fields are required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        const isUserExist = yield userRepository_1.userRepository.getUserByEmail(email);
        if (isUserExist) {
            throw new ApiError_1.ApiError({ message: "User already exist", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        const hashedPassword = yield argon2_1.default.hash(password);
        const response = yield userRepository_1.userRepository.createUser({
            username,
            email,
            password: hashedPassword
        });
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.userSingUpService = userSingUpService;
const userSingInService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = data;
        if (!email || !password) {
            throw new ApiError_1.ApiError({ message: "All fields are required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        const response = yield userRepository_1.userRepository.getUserByEmail(email);
        if (!response)
            throw new ApiError_1.ApiError({ message: "User not exist please sign up", statusCode: http_status_codes_1.StatusCodes.NOT_FOUND });
        const isMatched = yield argon2_1.default.verify(response.password, password);
        if (!isMatched)
            throw new ApiError_1.ApiError({ message: "Incorrect password", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        return {
            id: response.id,
            username: response.username,
            email: response.email,
            token: (0, tokenSign_1.createUserJWT)({
                id: response.id,
                username: response.username,
                email: response.email
            })
        };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.userSingInService = userSingInService;
