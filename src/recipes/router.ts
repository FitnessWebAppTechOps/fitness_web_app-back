import { Router } from 'express';
import { validateRequest, wrapController } from '../utils/wrappers';
import { createRecipeRequestSchema } from './validations';
import { RecipesController } from './controller';


export const recipesRouter = Router();

recipesRouter.post('/', validateRequest(createRecipeRequestSchema), wrapController(RecipesController.createRecipe));
