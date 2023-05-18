import { Request, Response, query } from "express";
import { UsersManager } from "./users.manager";
import { TypedRequest } from "../../utils/zod";
import { createUsersRequestSchema } from "./users.validations";

export class UsersController {
  static async createUser(req: TypedRequest<typeof createUsersRequestSchema>, res: Response) {
    //res.json(await UsersManager.createUser(req.body)); 
  }
}
