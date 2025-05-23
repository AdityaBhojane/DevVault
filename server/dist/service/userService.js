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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.getUserService = void 0;
const http_status_codes_1 = require("http-status-codes");
const userRepository_1 = require("../repository/userRepository");
const ApiError_1 = require("../utils/Error/ApiError");
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield userRepository_1.userRepository.getUserById(id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.getUserService = getUserService;
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id || !data)
            throw new ApiError_1.ApiError({ message: "id and data is required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        const response = yield userRepository_1.userRepository.updateUser(id, data);
        return response;
    }
    catch (error) {
        console.log("update user service error", error);
        throw error;
    }
});
exports.updateUserService = updateUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield userRepository_1.userRepository.deleteUserById(id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.deleteUserService = deleteUserService;
