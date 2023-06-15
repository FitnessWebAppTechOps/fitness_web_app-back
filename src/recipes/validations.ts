import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";
import { MealType } from "./interface";

const IMacrosSchema = z.object({
  calories: z.number(),
  protein: z.number(),
  carbs: z.number(),
  fat: z.number(),
  fiber: z.number(),
  cholesterol: z.number().optional(),
  sodium: z.number().optional(),
  water: z.number().optional(),
  calcium: z.number().optional(),
  iron: z.number().optional(),
  magnesium: z.number().optional(),
  phosphorus: z.number().optional(),
  zinc: z.number().optional(),
  potassium: z.number().optional(),
});

const recipesSchema = z
  .object({
    userId: zodMongoObjectId,
    recipeName: z.string(),
    mealType: z.nativeEnum(MealType),
    macros: IMacrosSchema,
  })
  .required();

//POST /api/recipes
export const createRecipeRequestSchema = z.object({
  body: recipesSchema,
  query: z.object({}),
  params: z.object({}),
});
