"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSuccussResponse = void 0;
const customSuccussResponse = (message, data) => {
    return {
        success: true,
        message: message,
        response: data
    };
};
exports.customSuccussResponse = customSuccussResponse;
