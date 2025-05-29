"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacherJWT = exports.createAdminJWT = exports.createUserJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const serverConfig_1 = require("../config/serverConfig");
const createUserJWT = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, serverConfig_1.USER_SECRET);
};
exports.createUserJWT = createUserJWT;
const createAdminJWT = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, serverConfig_1.ADMIN_SECRET);
};
exports.createAdminJWT = createAdminJWT;
const createTeacherJWT = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, serverConfig_1.TEACHER_SECRET);
};
exports.createTeacherJWT = createTeacherJWT;
