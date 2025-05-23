"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(error) {
        super();
        this.message = error.message,
            this.statusCode = error.statusCode ? error.statusCode : 400;
    }
}
exports.ApiError = ApiError;
