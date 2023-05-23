/* eslint-disable @typescript-eslint/no-unused-vars */
import { UsersRepository } from "./users.repository";
import {
  Gender,
  IFitnessProfile,
  IUser,
  UserDocument,
} from "./users.interface";
import { UserModel } from "./users.model";
import { UsersDocumentNotFoundError } from "../../utils/errors";

export class UsersManager {
  static async createUser(user: IUser): Promise<UserDocument> {
    return UserModel.create(user);
  }

  static async getUsersByQuery(query: Partial<IUser>, step: number, limit?: number): Promise<UserDocument[]> {
    return UserModel.find(query, {}, limit ? { limit, skip: limit * step } : {}).exec();
  }

  static async getUserById(userId: string): Promise<UserDocument> {
    return UserModel.findById(userId).orFail(new UsersDocumentNotFoundError(userId)).exec();
  }

  static async updateUser(userId: string, update: Partial<IUser>): Promise<UserDocument> {
    return UserModel.findByIdAndUpdate(userId, update, { new: true }).orFail(new UsersDocumentNotFoundError(userId)).exec();
  }
  
}
