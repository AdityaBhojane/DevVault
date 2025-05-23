"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTverifyTeacher = exports.JWTverifyAdmin = exports.JWTverifyUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const serverConfig_1 = require("../config/serverConfig");
const JWTverifyUser = (token) => {
    return (0, jsonwebtoken_1.verify)(token, serverConfig_1.USER_SECRET);
};
exports.JWTverifyUser = JWTverifyUser;
const JWTverifyAdmin = (token) => {
    return (0, jsonwebtoken_1.verify)(token, serverConfig_1.ADMIN_SECRET);
};
exports.JWTverifyAdmin = JWTverifyAdmin;
const JWTverifyTeacher = (token) => {
    return (0, jsonwebtoken_1.verify)(token, serverConfig_1.TEACHER_SECRET);
};
exports.JWTverifyTeacher = JWTverifyTeacher;
