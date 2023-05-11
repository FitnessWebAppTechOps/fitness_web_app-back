import * as mongoose from "mongoose";
import { Gender, IUser } from "./users.interface";

const fitnessProfileSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true,
  },
  hight: {
    type: Number,
    required: true,
  },
  fitnessGoal: {
    type: String,
    required: true,
  },
  trainingFrequency: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: 16777215, // The maximum value for a 24-bit number (2^24 - 1)
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: Gender,
    required: true,
  },
  fitnessProfile: {
    type: fitnessProfileSchema,
    required: true,
  },
});

userSchema.index({ name: 1 });

export const UserModel = mongoose.model<IUser & mongoose.Document>(
  "IUser",
  userSchema
);
