"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/authController");
const userController_1 = require("../../controllers/userController");
const cloudinary_1 = require("../../utils/file upload/cloudinary");
const authMiddleware_1 = __importDefault(require("../../middlewares/authMiddleware"));
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', authController_1.signUpController);
userRouter.post('/signin', authController_1.signInController);
userRouter.put('/', authMiddleware_1.default, cloudinary_1.upload.single('avatar'), userController_1.updateUserController);
userRouter.delete('/', authMiddleware_1.default, userController_1.deleteUserController);
exports.default = userRouter;
