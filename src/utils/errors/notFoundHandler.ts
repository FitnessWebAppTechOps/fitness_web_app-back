import * as express from "express";

/* TODO: check if actually necessery by running forms backend and checking what happends when 
it can't find a resource. If it doesn't handles 404 status error, add it to error handler 
(or use it as separate middlware like in 
https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/#Implement-Express-Error-Handling) */
export const notFoundHandler = (
  error: Error,
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const message = "Resource not found";

  res.status(404).send({
    type: error.name,
    message: error.message,
  });
  console.log(
    `${error.name} was thrown with status 404 and message ${error.message}`
  );
};
