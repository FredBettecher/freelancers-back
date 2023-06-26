import { login, signUp } from 'controllers';
import { Router } from 'express';
import { validateBody } from 'middlewares';
import authSchema from 'schemas/auth-schemas';

const authRouter = Router();

authRouter
    .post('/sign-up', validateBody(authSchema.signUp), signUp)
    .post('/login', validateBody(authSchema.login), login);

export { authRouter };
