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
exports.lectureDeleteService = exports.lectureUpdateService = exports.lectureCreateService = void 0;
const http_status_codes_1 = require("http-status-codes");
const ApiError_1 = require("../utils/Error/ApiError");
const lectruesRepository_1 = require("../repository/lectruesRepository");
const cloudinary_1 = require("../utils/file upload/cloudinary");
const lectureCreateService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, videoURL, courseId, public_id } = data;
        if (!title || !videoURL || !description || !courseId) {
            throw new ApiError_1.ApiError({ message: "all fields are required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const response = yield lectruesRepository_1.lectureRepository.createLecture({
            title,
            description,
            videoURL,
            courseId,
            public_id
        });
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.lectureCreateService = lectureCreateService;
const lectureUpdateService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, videoURL } = data;
        if (!title && !videoURL && !description) {
            throw new ApiError_1.ApiError({ message: "all fields are required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const response = yield lectruesRepository_1.lectureRepository.updateLecture(data, id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.lectureUpdateService = lectureUpdateService;
const lectureDeleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id) {
            throw new ApiError_1.ApiError({ message: "lecture id is required", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        ;
        const lecture = yield lectruesRepository_1.lectureRepository.getLecture(id);
        if (!lecture) {
            throw new ApiError_1.ApiError({ message: "lecture not found or invalid id", statusCode: http_status_codes_1.StatusCodes.FORBIDDEN });
        }
        if (lecture && lecture.public_id) {
            yield (0, cloudinary_1.deleteVideoCloudinary)(lecture.public_id);
        }
        const response = lectruesRepository_1.lectureRepository.deleteLecture(id);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.lectureDeleteService = lectureDeleteService;
