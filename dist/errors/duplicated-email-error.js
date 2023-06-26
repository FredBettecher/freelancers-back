"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicatedEmailError = void 0;
var protocols_1 = require("protocols");
function duplicatedEmailError() {
    return {
        name: protocols_1.AcceptedErrorNames.DuplicatedEmailError,
        message: 'E-mail already in use',
    };
}
exports.duplicatedEmailError = duplicatedEmailError;
