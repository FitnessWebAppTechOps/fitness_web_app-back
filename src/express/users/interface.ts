export interface IUser {
  name: string;
  password: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderTypes;
  fitnessProfile: IFitnessProfile;
}

export interface IFitnessProfile {
  weight: number;
  height: number;
  fitnessGoal: string;
  trainingFrequency: number;
}

export enum GenderTypes {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface UserDocument extends IUser {
  _id: string;
}
