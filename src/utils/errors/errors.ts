/* eslint-disable max-classes-per-file */
export class ServiceError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

export class MenusDocumentNotFoundError extends ServiceError {
  constructor(id: string) {
    super(404, `No menus found with id ${id}`);
  }
}
