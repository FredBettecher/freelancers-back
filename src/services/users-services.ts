import { Users } from '@prisma/client';
import { notFoundError } from 'errors';
import userRepository from 'repositories/users-repository';

async function getUsersList(username: string): Promise<Users[]> {
    const ListUsers = await userRepository.findUsersByName(username);
    if(ListUsers.length === 0) throw notFoundError();

    return ListUsers;
}

const usersServices = {
    getUsersList,
};

export default usersServices;
