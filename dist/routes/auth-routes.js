"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var controllers_1 = require("controllers");
var express_1 = require("express");
var middlewares_1 = require("middlewares");
var auth_schemas_1 = __importDefault(require("schemas/auth-schemas"));
var authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter
    .post('/sign-up', (0, middlewares_1.validateBody)(auth_schemas_1.default.signUp), controllers_1.signUp)
    .post('/login', (0, middlewares_1.validateBody)(auth_schemas_1.default.login), controllers_1.login);
