import { FilterQuery } from "mongoose";
import { ProgramsDocumentNotFoundError } from "../utils/errors/errors";
import { IProgram, IProgramDocument } from "./interface";
import { ProgramsModel } from "./model";

export class ProgramsManager {
  static async createProgram(program: IProgram) {}

  static async getProgramById(programId: string): Promise<IProgramDocument> {
    return ProgramsModel.findById(programId)
      .orFail(new ProgramsDocumentNotFoundError(programId))
      .exec();
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
  ): Promise<IProgramDocument | null> {
    return ProgramsModel.findByIdAndUpdate(programId, updatedProgram, {
      new: true
    })
      .orFail(new ProgramsDocumentNotFoundError(programId))
      .exec();
  }

  static async deleteProgramById(programId: string): Promise<IProgramDocument> {
    return ProgramsModel.findByIdAndDelete(programId).orFail().exec();
  }

  static async getAllPrograms(): Promise<IProgramDocument[]> {
    return ProgramsModel.find().exec();
  }
}
