/* eslint-disable max-classes-per-file */
export class ServiceError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

export class RecipesDocumentNotFoundError extends ServiceError {
  constructor(id: string) {
    super(404, `No recipes found with id ${id}`);
  }
}
