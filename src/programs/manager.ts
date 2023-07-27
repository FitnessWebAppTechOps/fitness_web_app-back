import { FilterQuery } from "mongoose";
import { NotFoundError } from "../utils/errors/notFoundError";
import { IProgram, IProgramDocument } from "./interface";
import { ProgramsModel } from "./model";

export class ProgramsManager {
  static async createProgram(program: IProgram) {
    return ProgramsModel.create(program);
  }

  static async getProgramById(programId: string): Promise<IProgramDocument> {
    return ProgramsModel.findById(programId)
      .orFail(new NotFoundError(programId))
      .exec();
  }

  static async getAllPrograms(): Promise<IProgramDocument[]> {
    return ProgramsModel.find().exec();
  }

  static async getProgramsByQuery(
    query: IProgramDocument[keyof IProgramDocument]
  ): Promise<IProgramDocument[]> {
    const filter: FilterQuery<IProgramDocument> = {};
    filter[query as keyof IProgramDocument] = { $exists: true }; // Create a filter query based on the specified property key
    return ProgramsModel.find(filter).exec();
  }

  static async updateProgramById(
    programId: string,
    updatedProgram: Partial<IProgram>
  ): Promise<IProgramDocument> {
    return ProgramsModel.findByIdAndUpdate(programId, updatedProgram, {
      new: true
    })
      .orFail(new NotFoundError(programId))
      .exec();
  }

  static async deleteProgramById(programId: string): Promise<IProgramDocument> {
    return ProgramsModel.findByIdAndDelete(programId).orFail().exec();
  }
}
