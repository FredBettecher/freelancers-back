import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from 'config';
import { authRouter, usersRouter } from 'routes';
import { handleApplicationErrors } from 'middlewares';

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .use('/users', usersRouter)
    .use('/auth', authRouter)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;
