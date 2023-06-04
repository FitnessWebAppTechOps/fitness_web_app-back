import mongoose, { Schema } from 'mongoose';
import { config } from '../config';
import { IRecipe, MealType, RecipeDocument, IMacros } from './interface';

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
  },
  fat: {
    type: Number,
  },
  cholesterol: {
    type: Number,
  },
  fiber: {
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

const recipesSchema = new mongoose.Schema<IRecipe>(
    {
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
        }
    }
);

export const RecipesModel = mongoose.model<RecipeDocument>(config.mongo.recipesCollectionName, recipesSchema);