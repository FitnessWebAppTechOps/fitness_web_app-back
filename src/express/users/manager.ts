/* eslint-disable @typescript-eslint/no-unused-vars */
import { FilterQuery, Document } from "mongoose";
import { IUser } from "./interface";
import { UserModel } from "./model";
import { UsersDocumentNotFoundError } from "../../utils/errors";
import { calculateBMI, calculateBMR } from "../../utils/fitnessCalculations";

export class UsersManager {
  static async createUser(user: IUser): Promise<IUser> {
    user.fitnessProfile.bmi = calculateBMI(
      user.fitnessProfile.weight,
      user.fitnessProfile.height
    );
    user.fitnessProfile.bmr = calculateBMR(
      user.fitnessProfile.weight,
      user.fitnessProfile.height,
      user.age,
      user.gender
    );

    return UserModel.create(user);
  }

  static async getUsersByQuery(
    query: IUser[keyof IUser],
    step: number,
    limit?: number
  ): Promise<IUser[]> {
    const filter: FilterQuery<IUser & Document<any, any, any>> = {};
    filter[query as keyof IUser] = { $exists: true }; // Create a filter query based on the specified property key

    return UserModel.find(
      filter,
      {},
      limit ? { limit, skip: limit * step } : {}
    ).exec();
  }

  static async getUserById(userId: string): Promise<IUser> {
    return UserModel.findById(userId)
      .orFail(new UsersDocumentNotFoundError(userId))
      .exec();
  }

  static async getUsersCounter(): Promise<number> {
    return UserModel.countDocuments().exec();
  }

  static async getAllUsers(): Promise<IUser[]> {
    return UserModel.find().exec();
  }

  static async updateUser(
    userId: string,
    updatedUserDetails: Partial<IUser>
  ): Promise<IUser> {
    return UserModel.findByIdAndUpdate(userId, updatedUserDetails, {
      new: true
    })
      .orFail(new UsersDocumentNotFoundError(userId))
      .exec();
  }

  static async deleteUser(userId: string): Promise<IUser> {
    return UserModel.findByIdAndDelete(userId)
      .orFail(new UsersDocumentNotFoundError(userId))
      .exec();
  }
}
