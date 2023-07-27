import { Response } from "express";
import { TypedRequest } from "../utils/zod";
import { ProgramsManager } from "./manager";
// import { createRecipeRequestSchema } from "./validations";
// import { RecipesManager } from "./manager";

export class ProgramsController {
  static async createProgram(
    req: TypedRequest<typeof programsSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.createProgram(req.body));
  }
}

// TODO: finish controller.
