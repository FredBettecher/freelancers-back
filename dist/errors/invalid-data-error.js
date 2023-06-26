"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidDataError = void 0;
var protocols_1 = require("protocols");
function invalidDataError() {
    return {
        name: protocols_1.AcceptedErrorNames.InvalidDataError,
        message: 'Invalid data',
    };
}
exports.invalidDataError = invalidDataError;
