"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../../controllers/courseController");
const authMiddleware_1 = __importDefault(require("../../middlewares/authMiddleware"));
const cloudinary_1 = require("../../utils/file upload/cloudinary");
const courseRouter = (0, express_1.Router)();
courseRouter.post('/', authMiddleware_1.default, cloudinary_1.upload.single('thumbnail'), courseController_1.createCourseController);
courseRouter.put('/', authMiddleware_1.default, cloudinary_1.upload.single('thumbnail'), courseController_1.updateCourseController);
courseRouter.get('/', authMiddleware_1.default, courseController_1.getCourseController);
courseRouter.delete('/', authMiddleware_1.default, courseController_1.deleteCourseController);
exports.default = courseRouter;
