import * as jayson from "jayson/promise";
/* istanbul ignore next */
export class ApplicationError extends Error implements jayson.JSONRPCError {
  public code: number;

  constructor(public message: string, public status: number) {
    super();
    this.code = this.status;
    this.name = this.constructor.name;
  }
}
/* istanbul ignore next */
export class UserError extends ApplicationError {
  constructor(message = "User Error", status = 400) {
    super(message, status);
  }
}

/* istanbul ignore next */
export class ServiceError extends ApplicationError {
  constructor(message = "Service Error", status = 400) {
    super(message, status);
  }
}

/* istanbul ignore next */
export class ServerError extends ApplicationError {
  constructor(message = "Server Error", status = 500) {
    super(message, status);
  }
}
