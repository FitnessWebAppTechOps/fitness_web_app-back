import { CustomError } from "./customError";

export class ClientError extends CustomError {
  constructor(additionalData: string) {
    const message = "Client error!";
    super(`${message}\n ${additionalData}`, 400);
  }
}
