import mongoose, { Schema } from "mongoose";
import { config } from "../config";
import { IMeal, IDayMenu, IMonthlyMenu } from "./interface";
import { IRecipe } from "../utils/interfaces/recipes";
import { required } from "joi";

const mealSchema: Schema<IMeal> = new Schema<IMeal>({
  mealNumber: {
    type: Number,
    required: true
  },
  options: {
    type: [String],
    ref: "Recipe",
    required: true
  }
});
