import { Response } from "express";
import { TypedRequest } from "../utils/zod";
import { createRecipeRequestSchema } from "./validations";
import { RecipesManager } from "./manager";

// TODO: only create is actually correct! change the ither funcs!
export class RecipesController {
  static async createRecipe(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }

  static async getRecipeById(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }

  static async getRecipesByQuery(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }

  static async updateRecipeById(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }

  static async deleteRecipeById(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }

  static async getAllRecipes(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }
}
