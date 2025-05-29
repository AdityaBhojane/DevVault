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
exports.deleteVideoCloudinary = exports.deleteImageCloudinary = exports.uploadVideo = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2
});
const storageVideo = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        resource_type: 'video',
    }
});
exports.upload = (0, multer_1.default)({ storage: storage, limits: { fileSize: 100 * 1024 * 5 } });
exports.uploadVideo = (0, multer_1.default)({ storage: storageVideo, limits: { fileSize: 100 * 1024 * 1024 } });
const deleteImageCloudinary = (publicId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield cloudinary_1.v2.uploader.destroy(publicId);
        console.log("cloudinary response", response);
    }
    catch (error) {
        console.log('unable to delete image', error);
        throw error;
    }
});
exports.deleteImageCloudinary = deleteImageCloudinary;
const deleteVideoCloudinary = (publicId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield cloudinary_1.v2.uploader.destroy(publicId, { resource_type: "video" });
        console.log("cloudinary response", response);
    }
    catch (error) {
        console.log('unable to delete video', error);
        throw error;
    }
});
exports.deleteVideoCloudinary = deleteVideoCloudinary;
