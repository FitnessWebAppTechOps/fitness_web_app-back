import { z } from "zod";
import { Gender } from "./users.interface";
import { zodMongoObjectId } from "../../utils/zod";

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
    fitnessProfile: fitnessProfileSchema,
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
  query: z
    .object({
      step: z.coerce.number().min(0).default(0),
      limit: z.coerce.number().optional(),
    })
    .merge(UserSchema.partial()),
  params: z.object({}),
});

// GET /api/users/:id
export const getUserByIdRequestSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
})

//PUT /api/users/:id
export const updateUserRequestSchema = z.object({
  body: UserSchema.partial(),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

//DELETE /api/users/:id
export const deleteUserRequestSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

