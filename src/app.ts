import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from 'config';
import { authRouter } from 'routes';

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .use('/', authRouter);

export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;
