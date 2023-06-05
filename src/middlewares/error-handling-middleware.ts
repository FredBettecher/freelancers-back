import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from 'protocols';
import httpStatus from 'http-status';

const errors = {
    InternalServerError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
            'message: Internal Server Error'
        );
    },

    DuplicatedEmailError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.CONFLICT).send(
            `message: ${err.message}`
        );
    },
};

export function handleApplicationErrors(err: ApplicationError, _req: Request, res:Response, _next: NextFunction) {
    try {
        errors[err.name](err, res);
    } catch(error) {
        errors['InternalServerError'](err, res);
    }
}
