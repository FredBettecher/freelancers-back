export type ApplicationError = {
    name: string;
    message: string;
};

export enum AcceptedErrorNames {
    InternalServerError = 'InternalServerError',
    DuplicatedEmailError = 'DuplicatedEmailError',
    InvalidDataError = 'InvalidDataError',
};