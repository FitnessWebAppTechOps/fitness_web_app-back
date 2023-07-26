import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
  constructor(additionalData: string) {
    const message = "Object not found error!";
    super(`${message}\n ${additionalData}`, 404);
  }
}
