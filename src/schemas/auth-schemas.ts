import Joi from 'joi';

const signUp = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
});

const authSchema = {
    signUp,
};

export default authSchema;