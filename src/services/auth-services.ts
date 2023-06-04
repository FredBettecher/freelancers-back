import { Users } from "@prisma/client";
import { duplicatedEmailError } from "errors";
import authRepository from "repositories/auth.repository";

async function userRegistration(email: string, password: string): Promise<Users> {
    const userExists = await authRepository.findByEmail(email);
    if(userExists) throw duplicatedEmailError();

    const newUser = await authRepository.createUser(email, password);

    return newUser;
}

const authServices = {
    userRegistration,
};

export default authServices;
