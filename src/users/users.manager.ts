/* eslint-disable @typescript-eslint/no-unused-vars */
import { UsersRepository } from "./users.repository";
import { Gender, IFitnessProfile, IUser } from "./users.interface";
import { UserNotFoundError } from "../utils/errors/users";
import { UserModel } from "./users.model";

export class UsersManager {
  static async createUser(
    username: string,
    password: string,
    country: string,
    email: string,
    name: string,
    age: number,
    gender: Gender,
    fitnessProfile: IFitnessProfile
  ): Promise<IUser> {
    return UsersRepository.createUser(
      username,
      password,
      country,
      email,
      name,
      age,
      gender,
      fitnessProfile
    );
  }

  static async getAllUsers(): Promise<IUser[]> {
    const users = await UsersRepository.getAllUsers();
    if (users.length !== 0) return users;
    throw new UserNotFoundError();
  }

  static async getUserById(userId: string): Promise<IUser | null> {
    const user = await UsersRepository.getUserById(userId);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async getUserByCountry(country: string): Promise<IUser | null> {
    const user = await UsersRepository.getUserByCountry(country);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async getUserByAge(age: number): Promise<IUser | null> {
    const user = await UsersRepository.getUserByAge(age);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async getUserByGender(gender: string): Promise<IUser | null> {
    const user = await UsersRepository.getUserByGender(gender);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async deleteUserById(userId: string): Promise<IUser | null> {
    const user = await UsersRepository.deleteUserById(userId);
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async updateUserDetailsById(
    userId: string,
    country: string,
    name: string,
    age: number,
    gender: Gender,
    fitnessProfile: IFitnessProfile
  ): Promise<IUser | null> {
    const user = await UsersRepository.updateUserDetailsById(
      userId,
      country,
      name,
      age,
      gender,
      fitnessProfile
    );
    if (!user) throw new UserNotFoundError();
    return user;
  }

  static async updateUserFitnessProfileById(
    userId: string,
    fitnessProfile: IFitnessProfile
  ): Promise<IUser | null> {
    const user = await UsersRepository.updateUserFitnessProfileById(
      userId,
      fitnessProfile
    );
    if (!user) throw new UserNotFoundError();
    return user;
  }
}
