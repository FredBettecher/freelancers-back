"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedError = void 0;
var protocols_1 = require("protocols");
function unauthorizedError() {
    return {
        name: protocols_1.AcceptedErrorNames.UnauthorizedError,
        message: 'Unauthorized',
    };
}
exports.unauthorizedError = unauthorizedError;
