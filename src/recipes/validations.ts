import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";
import { MealType } from "./interface";

const IMacrosSchema = z
  .object({
    calories: z.number(),
    protein: z.number(),
    carbs: z.number(),
    fat: z.number(),
    cholesterol: z.number(),
    fiber: z.number(),
    sodium: z.number(),
    water: z.number(),
    calcium: z.number(),
    iron: z.number(),
    magnesium: z.number(),
    phosphorus: z.number(),
    zinc: z.number(),
    potassium: z.number(),
  })
  .partial();

const recipesSchema = z
  .object({
    userId: zodMongoObjectId,
    recipeName: z.string(),
    mealType: z.nativeEnum(MealType),
    macros: IMacrosSchema,
    price: z.string().optional(),
  })
  .required();

//POST /api/recipes
export const createRecipeRequestSchema = z.object({
  body: recipesSchema,
  query: z.object({}),
  params: z.object({}),
});
