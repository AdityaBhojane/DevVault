"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/authController");
const userRouter = (0, express_1.Router)();
userRouter.post('/', authController_1.signUpController);
exports.default = userRouter;
