"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
var protocols_1 = require("protocols");
function notFoundError() {
    return {
        name: protocols_1.AcceptedErrorNames.NotFoundError,
        message: 'Not found error',
    };
}
exports.notFoundError = notFoundError;
