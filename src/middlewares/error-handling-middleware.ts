import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from 'protocols';
import httpStatus from 'http-status';

const errors = {
    InternalServerError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
            'Internal server error'
        );
    },

    DuplicatedEmailError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.CONFLICT).send({
            name: err.name,
            message: err.message,
        });
    },

    InvalidCredentialsError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.UNAUTHORIZED).send({
            name: err.name,
            message: err.message,
        });
    },

    UnauthorizedError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.UNAUTHORIZED).send({
            name: err.name,
            message: err.message,
        });
    },
};

export function handleApplicationErrors(err: ApplicationError, _req: Request, res:Response, _next: NextFunction) {
    try {
        errors[err.name](err, res);
    } catch(error) {
        errors['InternalServerError'](err, res);
    }
}
