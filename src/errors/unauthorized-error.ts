import { AcceptedErrorNames, ApplicationError } from "protocols";

export function unauthorizedError(): ApplicationError {
    return {
        name: AcceptedErrorNames.UnauthorizedError,
        message: 'Unauthorized',
    }
}
