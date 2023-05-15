"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.ServiceError = exports.UserError = exports.ApplicationError = void 0;
class ApplicationError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        this.code = this.status;
        this.name = this.constructor.name;
    }
}
exports.ApplicationError = ApplicationError;
class UserError extends ApplicationError {
    constructor(message = "User Error", status = 400) {
        super(message, status);
    }
}
exports.UserError = UserError;
class ServiceError extends ApplicationError {
    constructor(message = "Service Error", status = 400) {
        super(message, status);
    }
}
exports.ServiceError = ServiceError;
class ServerError extends ApplicationError {
    constructor(message = "Server Error", status = 500) {
        super(message, status);
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=errors.js.map