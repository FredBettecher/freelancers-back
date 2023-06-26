import { AcceptedErrorNames, ApplicationError } from "protocols";

export function notFoundError(): ApplicationError {
    return {
        name: AcceptedErrorNames.NotFoundError,
        message: 'Not found error',
    }
}
