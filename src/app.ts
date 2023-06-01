import express from 'express';
import cors from 'cors';

import { connectDB, disconnectDB } from 'controllers';

const app = express();
app
    .use(cors())
    .use(express.json());

export function init(){
    connectDB;
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;