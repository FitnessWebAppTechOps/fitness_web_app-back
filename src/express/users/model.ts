import * as mongoose from "mongoose";
import { GenderTypes, IUser } from "./interface";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const fitnessProfileSchema = new Schema(
  {
    weight: {
      type: Number,
      required: true
    },
    hight: {
      type: Number,
      required: true
    },
    fitnessGoal: {
      type: String,
      required: true
    },
    trainingFrequency: {
      type: Number,
      required: true
    },
    bmi: {
      type: Number,
      required: true
    },
    bmr: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false
  }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    password: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: GenderTypes,
      required: true
    },
    fitnessProfile: {
      type: fitnessProfileSchema,
      required: true
    }
  },
  {
    versionKey: false
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // hash password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (
  candidatePassword: string,
  cb: (arg: any, isMatch?: boolean) => void
) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

interface IUserModel extends Omit<IUser, "_id">, mongoose.Document {
  comparePassword: (
    candidatePassword: string,
    cb: (err: any, isMatch?: boolean) => void
  ) => void;
}

export const UserModel = mongoose.model<IUserModel>("IUser", userSchema);
