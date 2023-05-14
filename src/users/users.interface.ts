export interface IUser {
  _id?: string;
  username: string;
  password: string;
  country: string;
  email: string;
  name: string;
  age: number;
  gender: Gender;
  fitnessProfile: IFitnessProfile;
  createdAt: Date;
}

export interface IFitnessProfile {
  weight: number;
  hight: number;
  fitnessGoal: string;
  trainingFrequency: number;
}

export enum Gender {
  male = "MAIL",
  female = "FEMALE",
  other = "OTHER",
}
