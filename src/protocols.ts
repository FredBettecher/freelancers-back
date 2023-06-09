export type ApplicationError = {
    name: string;
    message: string;
};

export enum AcceptedErrorNames {
    InternalServerError = 'InternalServerError',
    DuplicatedEmailError = 'DuplicatedEmailError',
    InvalidDataError = 'InvalidDataError',
    InvalidCredentialsError = 'InvalidCredentialsError',
    UnauthorizedError = 'UnauthorizedError',
    NotFoundError = 'NotFoundError',
};
