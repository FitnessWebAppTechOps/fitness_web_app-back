import { Gender, IFitnessProfile, IUser, UserDocument } from "./users.interface";
import { UserModel } from "./users.model";

export class UsersRepository {
  static createUser(tempUser: UserDocument): Promise<UserDocument> {
    return UserModel.create(tempUser);
  }

  static getAllUsers(): Promise<IUser[]> {
    return UserModel.find().exec();
  }

  static getUserById(userId: string): Promise<IUser | null> {
    return UserModel.findOne({ _id: userId }).exec();
  }

  static getUserByCountry(country: string): Promise<IUser | null> {
    return UserModel.findOne({ country: country }).exec();
  }

  static getUserByAge(age: number): Promise<IUser | null> {
    return UserModel.findOne({ age: age }).exec();
  }

  static getUserByGender(gender: string): Promise<IUser | null> {
    return UserModel.findOne({ gender: gender }).exec();
  }

  static deleteUserById(userId: string): Promise<IUser | null> {
    return UserModel.findOneAndDelete({ _id: userId }).exec();
  }

  static updateUserDetailsById(
    userId: string,
    country: string,
    name: string,
    age: number,
    gender: Gender,
    fitnessProfile: IFitnessProfile
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { country, name, age, gender, fitnessProfile },
      {
        new: true,
      }
    ).exec();
  }

  static updateUserFitnessProfileById(
    userId: string,
    fitnessProfile: IFitnessProfile
  ): Promise<IUser | null> {
    return UserModel.findByIdAndUpdate(
      userId,
      { fitnessProfile },
      {
        new: true,
      }
    ).exec();
  }
}
