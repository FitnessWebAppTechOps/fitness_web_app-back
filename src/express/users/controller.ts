import { Response } from "express";
import { UsersManager } from "./manager";
import { TypedRequest } from "../../utils/zod";
import {
  createUsersRequestSchema,
  deleteUserRequestSchema,
  getUserByIdRequestSchema,
  getUsersByQueryRequestSchema,
  getUsersCounterRequestSchema,
  updateUserRequestSchema
} from "./validations";
import { IUser } from "./interface";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export class UsersController {
  static async createUser(
    req: TypedRequest<typeof createUsersRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.createUser(req.body));
  }

  static async login(
    req: TypedRequest<typeof createUsersRequestSchema>,
    res: Response
  ) {
    const user: IUser = req.body;

    if (!user.email || !user.password) res.json("Invalid details!");

    const foundUser = await UsersManager.getUsersByQuery(user.email, 0);

    if (!foundUser) res.json("Invalid email!");

    user.comparePassword(user.password, async (err: any, isMatch: boolean) => {
      if (err || !isMatch) res.json("Invalid password!");

      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET!);
    });

    res.json("Success!");
  }

  static async getUsersByQuery(
    req: TypedRequest<typeof getUsersByQueryRequestSchema>,
    res: Response
  ) {
    const { step, limit, ...query } = req.query;

    res.json(
      await UsersManager.getUsersByQuery(
        query as unknown as keyof IUser,
        step,
        limit
      )
    );
  }

  static async getUserById(
    req: TypedRequest<typeof getUserByIdRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUserById(req.params.id));
  }

  static async getUsersCounter(
    req: TypedRequest<typeof getUsersCounterRequestSchema>,
    res: Response
  ) {
    res.json(await UsersManager.getUsersCounter(req.query));
  }

  static async getAllUsers(
    req: TypedRequest<typeof getUsersCounterRequestSchema>,
    res: Response
  ) {
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
