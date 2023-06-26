"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
var controllers_1 = require("controllers");
var express_1 = require("express");
var categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter = categoriesRouter;
categoriesRouter
    .get('/', controllers_1.getCategories);
