import { Router } from "express";
import { validateRequest, wrapController } from "../utils/wrappers";
import { createRecipeRequestSchema } from "./validations";
import { RecipesController } from "./controller";

export const recipesRouter = Router();

// TODO: change to schemas for all the requests (apart from create).
recipesRouter.post(
  "/",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.createRecipe)
);
recipesRouter.get(
  "/:id",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.getRecipeById)
);
recipesRouter.get(
  "/:query",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.getRecipesByQuery)
);
recipesRouter.get(
  "/all",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.getAllRecipes)
);
recipesRouter.put(
  "/:id",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.updateRecipeById)
);
recipesRouter.delete(
  "/:id",
  validateRequest(createRecipeRequestSchema),
  wrapController(RecipesController.deleteRecipeById)
);
