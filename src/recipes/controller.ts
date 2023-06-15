import { Response } from "express";
import { TypedRequest } from "../utils/zod";
import { createRecipeRequestSchema } from "./validations";
import { RecipesManager } from "./manager";

export class RecipesController {
  static async createRecipe(
    req: TypedRequest<typeof createRecipeRequestSchema>,
    res: Response
  ) {
    res.json(await RecipesManager.createRecipe(req.body));
  }
}
