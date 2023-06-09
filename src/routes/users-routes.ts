import usersController from 'controllers/users-controllers';
import { Router } from 'express';
import { validateBody } from 'middlewares';
import usersSchemas from 'schemas/users-schemas';

const usersRouter = Router();

usersRouter
    .get('/', validateBody(usersSchemas.usersList), usersController.getUsers);

export { usersRouter };
