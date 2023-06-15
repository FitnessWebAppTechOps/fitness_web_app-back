import mongoose, { Schema } from "mongoose";
import { config } from "../config";
import { IRecipe, MealType, IRecipeDocument, IMacros } from "./interface";

const macrosSchema: Schema<IMacros> = new Schema<IMacros>({
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
  cholesterol: {
    type: Number,
  },
  sodium: {
    type: Number,
  },
  water: {
    type: Number,
  },
  calcium: {
    type: Number,
  },
  iron: {
    type: Number,
  },
  magnesium: {
    type: Number,
  },
  phosphorus: {
    type: Number,
  },
  zinc: {
    type: Number,
  },
  potassium: {
    type: Number,
  },
});

const recipesSchema = new mongoose.Schema<IRecipe>({
  userId: {
    type: String,
  },
  recipeName: {
    type: String,
    required: true,
  },
  mealType: {
    type: String,
    enum: MealType,
    required: true,
  },
  macros: {
    type: macrosSchema,
    required: true,
  },
});

export const RecipesModel = mongoose.model<IRecipeDocument>(
  config.mongo.recipesCollectionName,
  recipesSchema
);
