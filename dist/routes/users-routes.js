"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var controllers_1 = require("controllers");
var express_1 = require("express");
var middlewares_1 = require("middlewares");
var users_schemas_1 = __importDefault(require("schemas/users-schemas"));
var usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter
    .get('/', (0, middlewares_1.validateBody)(users_schemas_1.default.usersList), controllers_1.getUsers);
