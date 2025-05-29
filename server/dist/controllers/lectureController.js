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
exports.deleteLectureController = exports.updateLectureController = exports.createLectureController = void 0;
const lectureService_1 = require("../service/lectureService");
const http_status_codes_1 = require("http-status-codes");
const customError_1 = __importDefault(require("../utils/customError"));
const customSuccess_1 = require("../utils/customSuccess");
const cloudinary_1 = require("../utils/file upload/cloudinary");
const lectruesRepository_1 = require("../repository/lectruesRepository");
const createLectureController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const courseId = Number(req.query.id);
        if (!req.file) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ success: false, error: 'error uploading lecture video' });
            return;
        }
        ;
        if (isNaN(courseId)) {
            // res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            // return;
            throw new Error('course id is required');
        }
        ;
        data.videoURL = req.file.path;
        data.public_id = req.file.filename;
        data.courseId = courseId;
        const response = yield (0, lectureService_1.lectureCreateService)(data);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("lecture created Successfully", response));
    }
    catch (error) {
        console.log("delete course controller error", error);
        if (req.file) {
            console.log(req.file);
            yield (0, cloudinary_1.deleteVideoCloudinary)(req.file.filename);
        }
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.createLectureController = createLectureController;
const updateLectureController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = Number(req.query.id);
        if (isNaN(id)) {
            throw new Error('course id is required');
        }
        ;
        const lecture = yield lectruesRepository_1.lectureRepository.getLecture(id);
        if (req.file && (lecture === null || lecture === void 0 ? void 0 : lecture.public_id)) {
            data.videoURL = req.file.path;
            data.public_id = req.file.filename;
            yield (0, cloudinary_1.deleteVideoCloudinary)(lecture.public_id);
        }
        ;
        const response = yield (0, lectureService_1.lectureUpdateService)(data, id);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("lecture updated Successfully", response));
    }
    catch (error) {
        console.log("delete course controller error", error);
        if (req.file) {
            console.log(req.file);
            yield (0, cloudinary_1.deleteVideoCloudinary)(req.file.filename);
        }
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.updateLectureController = updateLectureController;
const deleteLectureController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.query.id);
        const response = yield (0, lectureService_1.lectureDeleteService)(id);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("lecture deleted Successfully", response));
    }
    catch (error) {
        console.log("delete course controller error", error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.deleteLectureController = deleteLectureController;
