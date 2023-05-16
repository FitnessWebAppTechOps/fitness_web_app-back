import { Request, Response } from "express";
import { UsersManager } from "./users.manager";

export class UsersController {
  static async createUser(req: Request, res: Response): Promise<void> {
    res.json(
      await UsersManager.createUser(
        req.body.username,
        req.body.password,
        req.body.country,
        req.body.email,
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.fitnessProfile
      )
    );
  }
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    res.json(await UsersManager.getAllUsers());
  }
  static async getUserById(req: Request, res: Response): Promise<void> {
    res.json(await UsersManager.getUserById(req.query.userId as string));
  }
  static async getUserByCountry(req: Request, res: Response): Promise<void> {
    res.json(await UsersManager.getUserByCountry(req.query.country as string));
  }
  static async getUserByAge(req: Request, res: Response): Promise<void> {
    res.json(
      await UsersManager.getUserByAge(req.query.age as unknown as number)
    );
  }
  static async getUserByGender(req: Request, res: Response): Promise<void> {
    res.json(await UsersManager.getUserByGender(req.query.gender as string));
  }
  static async deleteUserById(req: Request, res: Response): Promise<void> {
    res.json(await UsersManager.deleteUserById(req.query.userId as string));
  }
  static async updateUserDetailsById(
    req: Request,
    res: Response
  ): Promise<void> {
    res.json(
      await UsersManager.updateUserDetailsById(
        req.body._id, // TODO: check if need to change to "id" instead of "_id"
        req.body.country,
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.fitnessProfile
      )
    );
  }
  static async updateUserFitnessProfileById(
    req: Request,
    res: Response
  ): Promise<void> {
    res.json(
      await UsersManager.updateUserFitnessProfileById(
        req.body._id,
        req.body.fitnessProfile
      )
    );
  }
}
