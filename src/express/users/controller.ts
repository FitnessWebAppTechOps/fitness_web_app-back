import { Response } from "express";
import { UsersManager } from "./manager";
import { TypedRequest } from "../../utils/zod";
import {
  createUsersRequestSchema,
  deleteUserRequestSchema,
  getUserByIdRequestSchema,
  getUsersByQueryRequestSchema,
  getUsersCountRequestSchema,
  updateUserRequestSchema,
} from "./validations";

export class UsersController {
  static async createUser(
    req: TypedRequest<typeof createUsersRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.createUser(req.body));
  }

  static async getUsersByQuery(
    req: TypedRequest<typeof getUsersByQueryRequestSchema>,
    res: Response
  ) {
    const { step, limit, ...query } = req.query;

    res.json(await UsersManager.getUsersByQuery(query, step, limit));
  }

  static async getUserById(
    req: TypedRequest<typeof getUserByIdRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUserById(req.params.id));
  }

  static async getUsersCount(
    req: TypedRequest<typeof getUsersCountRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUsersCount(req.query));
  }
  
  static async getAllUsers(req: TypedRequest<typeof getUsersCountRequestSchema>, res: Response) {
    res.json(await UsersManager.getAllUsers());
  }

  static async updateUser(
    req: TypedRequest<typeof updateUserRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.updateUser(req.params.id, req.body));
  }

  static async deleteUser(
    req: TypedRequest<typeof deleteUserRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.deleteUser(req.params.id));
  }
}
