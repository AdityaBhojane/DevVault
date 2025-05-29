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
const serverConfig_1 = require("../config/serverConfig");
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = require("jsonwebtoken");
const validateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: "token not found" });
            return;
        }
        ;
        const decode = (0, jsonwebtoken_1.verify)(token, serverConfig_1.USER_SECRET);
        req.user = decode;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized: Invalid token" });
    }
});
exports.default = validateUser;
