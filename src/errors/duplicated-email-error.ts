import { AcceptedErrorNames, ApplicationError } from 'protocols';

export function duplicatedEmailError(): ApplicationError {
    return {
        name: AcceptedErrorNames.DuplicatedEmailError,
        message: 'E-mail already in use',
    };
}
