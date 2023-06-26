import { Users } from "@prisma/client";
import { duplicatedEmailError, invalidCredentialsError } from "errors";
import userRepository from "repositories/users-repository";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

async function userRegistration(email: string, password: string): Promise<Users> {
    const emailExists = await userRepository.findByEmail(email);
    if(emailExists) throw duplicatedEmailError();

    const newUser = await userRepository.createUser(email, password);

    return newUser;
}

async function userLogin(email: string, password: string): Promise<string> {
    const user = await userRepository.findByEmail(email);
    if(!user) throw invalidCredentialsError();
    
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) throw invalidCredentialsError();

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return token;
}

const authServices = {
    userRegistration,
    userLogin,
};

export default authServices;
