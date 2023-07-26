import { Response } from "express";
import { TypedRequest } from "../utils/zod";
// import { createRecipeRequestSchema } from "./validations";
// import { RecipesManager } from "./manager";

export class ProgramsController {
  static async createProgram(
    req: TypedRequest<typeof programsSchema>,
    res: Response
  ) {
    res.json(await MenusManager.createMenu(req.body));
  }
}

// TODO: finish controller.
