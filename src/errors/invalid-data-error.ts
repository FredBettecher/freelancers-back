import { AcceptedErrorNames, ApplicationError } from "protocols";

export function invalidDataError(): ApplicationError {
    return {
        name: AcceptedErrorNames.InvalidDataError,
        message: 'Invalid data',
    };
}