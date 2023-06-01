import { Router } from 'express';
import { validateRequest } from '../utils/wrappers';


export const recipesRouter = Router();

recipesRouter.post('/', validateRequest(createRecipeRequestSchema))
