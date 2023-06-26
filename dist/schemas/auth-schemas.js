"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var signUp = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).required(),
    confirmPassword: joi_1.default.any().valid(joi_1.default.ref('password')).required().messages({
        'any.only': 'Passwords must match',
    })
});
var login = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
var authSchema = {
    signUp: signUp,
    login: login,
};
exports.default = authSchema;
