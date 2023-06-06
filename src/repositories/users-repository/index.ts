import { prisma } from 'config';
import { Users } from '@prisma/client';

async function findByEmail(email: string): Promise<Users> {
    return await prisma.users.findFirst({
        where: {
            email: email,
        },
    });
}

async function findById(userId: number): Promise<Users> {
    return await prisma.users.findFirst({
        where: {
            id: userId,
        },
    });
}

async function createUser(email: string, password: string): Promise<Users> {
    return prisma.users.create({
        data: {
            name: (email.split('@'))[0],
            email: email,
            password: password,
        },
    });
}

const userRepository = {
    findByEmail,
    findById,
    createUser,
};

export default userRepository;