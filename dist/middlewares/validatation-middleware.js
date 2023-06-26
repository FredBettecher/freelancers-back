"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
var http_status_1 = __importDefault(require("http-status"));
function validateBody(schema) {
    return validate(schema, 'body');
}
exports.validateBody = validateBody;
function validate(schema, type) {
    return function (req, res, next) {
        var error = schema.validate(req[type], {
            abortEarly: false,
            presence: 'required',
        }).error;
        if (!error) {
            next();
        }
        else {
            res.status(http_status_1.default.BAD_REQUEST).send(error.message);
        }
    };
}
