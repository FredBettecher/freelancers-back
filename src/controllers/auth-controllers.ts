import { NextFunction, Request, Response } from "express";
import authServices from "services/auth-services";
import bcrypt from 'bcrypt';
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body as { email: string, password: string };
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        await authServices.userRegistration(email, hashPassword);
        return res.sendStatus(httpStatus.CREATED);
    } catch(error) {
        next(error);
    }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body as { email: string, password: string };

    try {
        const token = await authServices.userLogin(email, password);
        return res.status(httpStatus.OK).send({ token });
    } catch(error) {
        next(error);
    }
}
