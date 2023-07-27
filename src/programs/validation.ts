import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";
import { TrainingLevel, MusclesGroups, FitnessGoal } from "./interface";
// createProgram, getProgramById, getAllPrograms, getProgramsByQuery, updateProgramById, deleteProgramById

const programsSchema = z.object({
  userId: zodMongoObjectId,
  programId: z.number(),
  trainingLevel: z.nativeEnum(TrainingLevel),
  musclesGroups: z.nativeEnum(MusclesGroups),
  programLength: z.number(),
  purpose: z.nativeEnum(FitnessGoal),
  price: z.number(),
  purchaseDate: z.date(),
  startingDate: z.date()
}); 

// TODO: add validations!
