import { AcceptedErrorNames, ApplicationError } from "protocols";

export function invalidCredentialsError(): ApplicationError {
    return {
        name: AcceptedErrorNames.InvalidCredentialsError,
        message: 'Invalid e-mail or password',
    }
}
