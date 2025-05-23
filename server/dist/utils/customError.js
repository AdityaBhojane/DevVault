"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = customErrorResponse;
function customErrorResponse(error) {
    if (!error.message) {
        return {
            success: false,
            error: "Internal Server Error"
        };
    }
    return ({
        success: false,
        error: error.message
    });
}
