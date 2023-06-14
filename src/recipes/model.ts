import mongoose, { Schema } from "mongoose";
import { config } from "../config";
import { IRecipe, MealType, RecipeDocument, IMacros } from "./interface";

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
  price: {
    type: Number,
  },
});

export const RecipesModel = mongoose.model<RecipeDocument>(
  config.mongo.recipesCollectionName,
  recipesSchema
);
