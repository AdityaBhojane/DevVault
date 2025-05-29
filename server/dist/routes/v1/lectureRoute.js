"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lectureController_1 = require("../../controllers/lectureController");
const authMiddleware_1 = __importDefault(require("../../middlewares/authMiddleware"));
const cloudinary_1 = require("../../utils/file upload/cloudinary");
const lectureRouter = (0, express_1.Router)();
lectureRouter.post('/', authMiddleware_1.default, cloudinary_1.uploadVideo.single('video'), lectureController_1.createLectureController);
lectureRouter.put('/', authMiddleware_1.default, cloudinary_1.uploadVideo.single('video'), lectureController_1.updateLectureController);
lectureRouter.delete('/', authMiddleware_1.default, lectureController_1.deleteLectureController);
exports.default = lectureRouter;
