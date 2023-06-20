export interface IUser {
  _id?: string;
  name: string;
  password: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  fitnessProfile: IFitnessProfile;
}

// export type UserDocument = IUser & {
//   _id: string;
// };

export interface IFitnessProfile {
  weight: number;
  height: number;
  fitnessGoal: string;
  trainingFrequency: number;
  bmi?: number;
  bmr?: number;
}

export enum Gender {
  Male = "MALE",
  Female = "FEMALE"
}
