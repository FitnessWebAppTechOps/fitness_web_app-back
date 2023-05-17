import { z } from "zod";
import { Gender } from "./users.interface";

const fitnessProfileSchema = z
  .object({
    weight: z.number(),
    height: z.number(),
    fitnessGoal: z.string(),
    trainingFrequency: z.number(),
  })
  .required();

const UserSchema = z
  .object({
    username: z.string(),
    password: z.string(),
    country: z.string(),
    email: z.string().email(),
    name: z.string(),
    age: z.number(),
    gender: z.nativeEnum(Gender),
    fitnessprofile: fitnessProfileSchema,
  })
  .required();

// POST /api/users
export const createUsersRequestSchema = z.object({
  body: UserSchema,
  query: z.object({}),
  params: z.object({}),
});

// GET /api/users/getAll
export const getAllUsersRequestSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

//GET /api/users
export const getUsersByQueryRequestSchema = z.object({
  body: z.object({}),
  query: z.object({}), // change
  params: z.object({}),
});
