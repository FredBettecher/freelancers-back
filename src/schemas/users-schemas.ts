import Joi from 'joi';

const usersList = Joi.object({
    username: Joi.string().allow('').required(),
});

const usersSchemas = {
    usersList,
};

export default usersSchemas;
