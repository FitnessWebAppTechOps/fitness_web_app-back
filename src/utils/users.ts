import { UserError } from "./errors";

export class ValidationError extends UserError {
  /* istanbul ignore next */
  constructor() {
    super("Validation error", 400);
  }
}

export class UserNotFoundError extends UserError {
  /* istanbul ignore next */
  constructor(message = "user not found") {
    super(message, 404);
  }
}
