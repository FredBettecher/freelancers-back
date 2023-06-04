import { NextFunction, Request, Response } from "express";
import authServices from "services/auth-services";
import bcrypt from 'bcrypt';
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body as { email: string, password: string };
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        const signUpUser = await authServices.userRegistration(email, hashPassword);
        return res.sendStatus(httpStatus.OK);
    } catch(error) {
        next(error);
    }
}
