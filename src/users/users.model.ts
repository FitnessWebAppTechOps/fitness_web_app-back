import * as mongoose from "mongoose";
import { Gender, IUser } from "./users.interface";

const fitnessProfileSchema = new mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
    id: true,
  }
);

const userSchema = new mongoose.Schema(
  {
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    id: true,
  }
);

userSchema.index({ name: 1 });

export const UserModel = mongoose.model<IUser & mongoose.Document>(
  "IUser",
  userSchema
);
