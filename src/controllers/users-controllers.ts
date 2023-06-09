import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import usersServices from 'services/users-services';

async function getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { username } = req.body as { username: string };

    try {
        const usersList = await usersServices.getUsersList(username);
        return res.status(httpStatus.OK).send(usersList)
    } catch(error) {
        next(error);
    }
}

const usersController = {
    getUsers,
};

export default usersController;
