"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidCredentialsError = void 0;
var protocols_1 = require("protocols");
function invalidCredentialsError() {
    return {
        name: protocols_1.AcceptedErrorNames.InvalidCredentialsError,
        message: 'Invalid e-mail or password',
    };
}
exports.invalidCredentialsError = invalidCredentialsError;
