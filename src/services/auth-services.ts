import { Users } from "@prisma/client";
import { duplicatedEmailError } from "errors";
import authRepository from "repositories/auth.repository";

async function userRegistration(email: string, password: string): Promise<Users> {
    const emailExists = await authRepository.findByEmail(email);
    if(emailExists.email.length !== 0) throw duplicatedEmailError();

    const newUser = await authRepository.createUser(email, password);

    return newUser;
}

const authServices = {
    userRegistration,
};

export default authServices;
