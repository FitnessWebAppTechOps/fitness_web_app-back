import { Request, Response, query } from "express";
import { UsersManager } from "./users.manager";
import { TypedRequest } from "../../utils/zod";
import { createUsersRequestSchema, getUserByIdRequestSchema, getUsersByQueryRequestSchema, updateUserRequestSchema } from "./users.validations";
import { typecast } from "zod";

export class UsersController {
  static async createUser(req: TypedRequest<typeof createUsersRequestSchema>, res: Response) {
    res.json(await UsersManager.createUser(req.body)); 
  }

  static async getUsersByQuery(req: TypedRequest<typeof getUsersByQueryRequestSchema>, res: Response ) {
    const { step , limit, ...query } = req.query ;

    res.json(await UsersManager.getUsersByQuery(query, step, limit));
  }

  static async getUserById(req: TypedRequest<typeof getUserByIdRequestSchema>, res: Response ) {
    res.json(await UsersManager.getUserById(req.params.id));
  }

  static async updateUser(req: TypedRequest<typeof updateUserRequestSchema>, res: Response ) {
    res.json(await UsersManager.updateUser(req.params.id, req.body));
  }

  
}
