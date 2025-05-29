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
exports.deleteCourseController = exports.getCourseController = exports.updateCourseController = exports.createCourseController = void 0;
const http_status_codes_1 = require("http-status-codes");
const courseServie_1 = require("../service/courseServie");
const customError_1 = __importDefault(require("../utils/customError"));
const customSuccess_1 = require("../utils/customSuccess");
const cloudinary_1 = require("../utils/file upload/cloudinary");
const createCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (!req.file) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ success: false, error: 'error in uploading thumbnail' });
            return;
        }
        data.thumbnail = req.file.path;
        data.public_id = req.file.filename;
        console.log(data);
        const response = yield (0, courseServie_1.courseCreateService)(data);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("course created Successfully", response));
    }
    catch (error) {
        console.log("create course controller error", error);
        if (req.file) {
            console.log(req.file);
            yield (0, cloudinary_1.deleteImageCloudinary)(req.file.filename);
        }
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.createCourseController = createCourseController;
const updateCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = Number(req.query.id);
        console.log("data ", data, id);
        if (!id && isNaN(id)) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ success: false, error: 'course id is required' });
            return;
        }
        if (req.file) {
            data.thumbnail = req.file.path;
            data.public_id = req.file.filename;
        }
        const response = yield (0, courseServie_1.courseUpdateService)(data, id);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("course updated Successfully", response));
    }
    catch (error) {
        console.log("update course controller error", error);
        if (req.file) {
            console.log(req.file);
            yield (0, cloudinary_1.deleteImageCloudinary)(req.file.filename);
        }
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.updateCourseController = updateCourseController;
const getCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ success: false, error: 'course id is required' });
            return;
        }
        ;
        const response = yield (0, courseServie_1.courseGetService)(id);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("course fetched Successfully", response));
    }
    catch (error) {
        console.log("get course controller error", error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.getCourseController = getCourseController;
const deleteCourseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ success: false, error: 'course id is required' });
            return;
        }
        ;
        const response = yield (0, courseServie_1.courseDeleteService)(id);
        res.status(http_status_codes_1.StatusCodes.OK).json((0, customSuccess_1.customSuccussResponse)("course deleted Successfully", response));
    }
    catch (error) {
        console.log("delete course controller error", error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, customError_1.default)(error));
    }
});
exports.deleteCourseController = deleteCourseController;
