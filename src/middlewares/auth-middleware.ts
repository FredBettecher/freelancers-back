import { unauthorizedError } from "errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userRepository from "repositories/users-repository";

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers as Record<string, string>;
    if(!authorization) throw unauthorizedError();

    const parts = authorization.split(' ');
    if(parts.length !== 2) throw unauthorizedError();

    const [schema, token] = parts;
    if(schema !== 'Bearer') throw unauthorizedError();

    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
        try {
            if(error) throw unauthorizedError();
            
            const id = decoded['id'];
            const user = await userRepository.findById(id);
            if(!user) throw unauthorizedError();

            res.locals.user = user;
            
            next();
        } catch(error) {
            next(error);
        }
    });
}
