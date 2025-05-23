"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUD_API_SECRET = exports.CLOUD_API_KEY = exports.CLOUD_NAME = exports.TEACHER_SECRET = exports.ADMIN_SECRET = exports.USER_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.USER_SECRET = process.env.USER_SECRET || "";
exports.ADMIN_SECRET = process.env.ADMIN_SECRET || "";
exports.TEACHER_SECRET = process.env.TEACHER_SECRET || "";
exports.CLOUD_NAME = process.env.CLOUD_NAME || "";
exports.CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
exports.CLOUD_API_SECRET = process.env.CLOUD_NAME || "";
