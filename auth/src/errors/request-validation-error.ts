import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    
    constructor(public errors: ValidationError[]) {
        super('Error validation');

        // Required when extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(error => {
            switch (error.type) {
                case 'field':
                    return { message: error.msg, field: error.path };
                default:
                    return { message: `Unknown error: ${error.type}`};
            }
        });
    }
}