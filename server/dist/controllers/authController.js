"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = void 0;
const authService_1 = require("../service/authService");
const signUpController = () => {
    try {
        const response = (0, authService_1.authSingUpService)();
    }
    catch (error) {
        console.log(error);
    }
};
exports.signUpController = signUpController;
