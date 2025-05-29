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
exports.courseDeleteService = exports.courseGetService = exports.courseUpdateService = exports.courseCreateService = void 0;
const http_status_codes_1 = require("http-status-codes");
const ApiError_1 = require("../utils/Error/ApiError");
const courseRepository_1 = require("../repository/courseRepository");
const cloudinary_1 = require("../utils/file upload/cloudinary");
const courseCreateService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, subtitle, description, category, price, thumbnail } = data;
        if (!title || !subtitle || !description || !category || !price || !thumbnail) {
            throw new ApiError_1.ApiError({ message: "all fields are required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const response = yield courseRepository_1.courseRepository.createCourse(data);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.courseCreateService = courseCreateService;
const courseUpdateService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, subtitle, description, category, price, thumbnail } = data;
        if (!title && !subtitle && !description && !category && !price && !thumbnail) {
            throw new ApiError_1.ApiError({ message: "at least one field is required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const course = yield courseRepository_1.courseRepository.getCourse(id);
        if (!course) {
            throw new ApiError_1.ApiError({ message: "course not found or invalid id", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        if (thumbnail && course.public_id) {
            yield (0, cloudinary_1.deleteImageCloudinary)(course.public_id);
        }
        const response = yield courseRepository_1.courseRepository.updateCourse(data, id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.courseUpdateService = courseUpdateService;
const courseGetService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id) {
            throw new ApiError_1.ApiError({ message: "courseId is required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const response = yield courseRepository_1.courseRepository.getCourse(id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.courseGetService = courseGetService;
const courseDeleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id) {
            throw new ApiError_1.ApiError({ message: "courseId is required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const course = yield courseRepository_1.courseRepository.getCourse(id);
        if (course === null || course === void 0 ? void 0 : course.public_id) {
            yield (0, cloudinary_1.deleteImageCloudinary)(course.public_id);
        }
        const response = yield courseRepository_1.courseRepository.deleteCourse(id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.courseDeleteService = courseDeleteService;
