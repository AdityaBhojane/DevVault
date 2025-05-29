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
exports.deleteUserController = exports.updateUserController = exports.getUserByIdController = void 0;
const userService_1 = require("../service/userService");
const customError_1 = __importDefault(require("../utils/customError"));
const customSuccess_1 = require("../utils/customSuccess");
const http_status_codes_1 = require("http-status-codes");
const cloudinary_1 = require("../utils/file upload/cloudinary");
const userRepository_1 = require("../repository/userRepository");
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, error: 'invalid user id' });
        }
        const response = yield (0, userService_1.getUserService)(id);
        res.status(200).json({
            message: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.getUserByIdController = getUserByIdController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.user.id);
        if (isNaN(id)) {
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ success: false, error: 'invalid user id' });
            if (req.file) {
                yield (0, cloudinary_1.deleteImageCloudinary)(req.file.filename);
            }
            return;
        }
        ;
        const { username } = req.body;
        const updateData = { username: username };
        if (req.file) {
            updateData.avatar = req.file.path;
            updateData.public_id = req.file.filename;
            // delete find user and delete old image;
            const user = yield userRepository_1.userRepository.getUserById(id);
            if (user && user.public_id) {
                yield (0, cloudinary_1.deleteImageCloudinary)(user.public_id);
            }
        }
        ;
        const response = yield (0, userService_1.updateUserService)(id, updateData);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("Profile Updated Successfully", response));
    }
    catch (error) {
        console.log("update user controller error", error);
        if (req.file) {
            console.log(req.file);
            yield (0, cloudinary_1.deleteImageCloudinary)(req.file.filename);
        }
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.user.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid user ID' });
            return;
        }
        ;
        const response = yield (0, userService_1.deleteUserService)(id);
        res.status(200).json({
            message: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.deleteUserController = deleteUserController;
