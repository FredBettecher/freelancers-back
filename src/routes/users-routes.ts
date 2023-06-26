import { getUsers } from 'controllers';
import { Router } from 'express';
import { validateBody } from 'middlewares';
import usersSchemas from 'schemas/users-schemas';

const usersRouter = Router();

usersRouter
    .get('/', validateBody(usersSchemas.usersList), getUsers);

export { usersRouter };
