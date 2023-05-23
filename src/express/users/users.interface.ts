export interface IUser {
  username: string;
  password: string;
  country: string;
  email: string;
  name: string;
  age: number;
  gender: Gender;
  fitnessProfile: IFitnessProfile;
}

export interface IFitnessProfile {
  weight: number;
  height: number;
  fitnessGoal: string;
  trainingFrequency: number;
}

export enum Gender {
  male = "MAIL",
  female = "FEMALE",
  other = "OTHER",
}

export interface UserDocument extends IUser {
  _id: string;
}
