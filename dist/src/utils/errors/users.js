"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = exports.ValidationError = void 0;
const errors_1 = require("./errors");
class ValidationError extends errors_1.UserError {
    constructor() {
        super("Validation error", 400);
    }
}
exports.ValidationError = ValidationError;
class UserNotFoundError extends errors_1.UserError {
    constructor(message = "user not found") {
        super(message, 404);
    }
}
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=users.js.map