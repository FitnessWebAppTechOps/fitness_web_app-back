import { Response, query } from "express";
import { TypedRequest } from "../utils/zod";
import { ProgramsManager } from "./manager";
import {
  createProgramSchema,
  getProgramByIdSchema,
  getAllProgramsSchema,
  getProgramsByQuerySchema,
  updateProgramByIdSchema,
  deleteProgramByIdSchema
} from "./validation";
// import { RecipesManager } from "./manager";

export class ProgramsController {
  static async createProgram(
    req: TypedRequest<typeof createProgramSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.createProgram(req.body));
  }

  static async getProgramById(
    req: TypedRequest<typeof getProgramByIdSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.getProgramById(req.params.id));
  }

  static async getAllPrograms(
    req: TypedRequest<typeof getAllProgramsSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.getAllPrograms());
  }

  static async getProgramsByQuery(
    req: TypedRequest<typeof getProgramsByQuerySchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.getProgramsByQuery(req.params.query));
  }

  static async updateProgramById(
    req: TypedRequest<typeof updateProgramByIdSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.updateProgramById(req.params.id, req.body));
  }

  static async deleteProgramById(
    req: TypedRequest<typeof deleteProgramByIdSchema>,
    res: Response
  ) {
    res.json(await ProgramsManager.deleteProgramById(req.params.id));
  }
}

// TODO: finish controller.
