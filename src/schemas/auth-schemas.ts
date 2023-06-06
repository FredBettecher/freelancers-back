import Joi from 'joi';

const signUp = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords must match',
    })
});

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const authSchema = {
    signUp,
    login,
};

export default authSchema;
