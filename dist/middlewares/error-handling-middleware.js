"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApplicationErrors = void 0;
var http_status_1 = __importDefault(require("http-status"));
var errors = {
    InternalServerError: function (err, res) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send('Internal server error');
    },
    DuplicatedEmailError: function (err, res) {
        return res.status(http_status_1.default.CONFLICT).send({
            name: err.name,
            message: err.message,
        });
    },
    InvalidCredentialsError: function (err, res) {
        return res.status(http_status_1.default.UNAUTHORIZED).send({
            name: err.name,
            message: err.message,
        });
    },
    UnauthorizedError: function (err, res) {
        return res.status(http_status_1.default.UNAUTHORIZED).send({
            name: err.name,
            message: err.message,
        });
    },
    NotFoundError: function (err, res) {
        return res.status(http_status_1.default.NOT_FOUND).send({
            name: err.name,
            message: err.message,
        });
    },
};
function handleApplicationErrors(err, _req, res, _next) {
    try {
        errors[err.name](err, res);
    }
    catch (error) {
        errors['InternalServerError'](err, res);
    }
}
exports.handleApplicationErrors = handleApplicationErrors;
