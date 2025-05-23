"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/authController");
const userController_1 = require("../../controllers/userController");
const cloudinary_1 = require("../../utils/file upload/cloudinary");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', authController_1.signUpController);
userRouter.post('/signin', authController_1.signInController);
userRouter.post('/update', cloudinary_1.upload.single('image'), userController_1.updateUserController);
exports.default = userRouter;
