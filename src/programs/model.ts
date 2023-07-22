import mongoose, { Schema } from "mongoose";
import { config } from "../config";
import {
  IProgram,
  TrainingLevel,
  MusclesGroups,
  FitnessGoal,
  IProgramDocument
} from "./interface";

const programsSchema: Schema<IProgram> = new Schema<IProgram>({
  userId: {
    type: Number,
    required: true
  },
  programId: {
    type: Number,
    required: true
  },
  trainingLevel: {
    type: String,
    enum: TrainingLevel,
    required: true
  },
  musclesGroups: {
    type: String,
    enum: MusclesGroups,
    required: true
  },
  programLength: {
    type: Number,
    required: true
  },
  purpose: {
    type: String,
    enum: FitnessGoal,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  startingDate: {
    type: Date,
    required: true
  }
});

export const ProgramsModel = mongoose.model<IProgramDocument>(
  config.mongo.programsCollectionName,
  programsSchema
);
