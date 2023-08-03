import { once } from "events";
import express from "express";
import helmet from "helmet";
import http from "http";
import { errorMiddleware } from "./utils/middlewares/errorMiddleware";
import { loggerMiddleware } from "./utils/middlewares/loggerMiddleware";
import { appRouter } from "./router";

export class Server {
  private app: express.Application;

  private http!: http.Server;

  /* istanbul ignore next */
  constructor(private port: number) {
    this.app = Server.createExpressApp();
  }

  static createExpressApp() {
    const app = express();

    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(loggerMiddleware);
    app.use(appRouter);

    app.use(errorMiddleware);

    return app;
  }

  /* istanbul ignore next */
  async start() {
    this.http = this.app.listen(this.port);
    await once(this.http, "listening");
  }
}
