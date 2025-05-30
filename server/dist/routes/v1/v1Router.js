"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const courseRouter_1 = __importDefault(require("./courseRouter"));
const lectureRoute_1 = __importDefault(require("./lectureRoute"));
const paymentRouter_1 = __importDefault(require("./paymentRouter"));
const router = (0, express_1.Router)();
router.use('/user', userRouter_1.default);
router.use('/course', courseRouter_1.default);
router.use('/lecture', lectureRoute_1.default);
router.use('/razorpay', paymentRouter_1.default);
exports.default = router;
