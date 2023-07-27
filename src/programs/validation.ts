import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";
import { TrainingLevel, MusclesGroups, FitnessGoal } from "./interface";
// createProgram, getProgramById, getAllPrograms, getProgramsByQuery, updateProgramById, deleteProgramById

const programsSchema = z.object({
  userId: zodMongoObjectId,
  programId: z.string(),
  trainingLevel: z.nativeEnum(TrainingLevel),
  musclesGroups: z.nativeEnum(MusclesGroups),
  programLength: z.number(),
  purpose: z.nativeEnum(FitnessGoal),
  price: z.number(),
  purchaseDate: z.date(),
  startingDate: z.date()
});

export const createProgramSchema = z.object({
  body: programsSchema,
  query: z.object({}),
  params: z.object({})
});

export const getProgramByIdSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const getAllProgramsSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({})
});

export const getProgramsByQuerySchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    query: z.string() // Validation for the 'query' route parameter (string)query
  })
});

export const updateProgramByIdSchema = z.object({
  body: programsSchema.partial(),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});

export const deleteProgramByIdSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId
  })
});
