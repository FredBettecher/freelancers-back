import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import categoriesServices from "services/categories-services";

export async function getCategories(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try{
        const categories = await categoriesServices.listCategories();
        return res.status(httpStatus.OK).json(categories);
    } catch(error) {
        next(error);
    }
}
