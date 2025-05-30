"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const serverConfig_1 = require("./serverConfig");
exports.instance = new razorpay_1.default({
    key_id: serverConfig_1.RZP_ID,
    key_secret: serverConfig_1.RZP_KEY,
});
