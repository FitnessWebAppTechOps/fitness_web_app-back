import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
  constructor(additionalData: string) {
    const message = "Forbidden error!";
    super(`${message}\n ${additionalData}`, 403);
  }
}
