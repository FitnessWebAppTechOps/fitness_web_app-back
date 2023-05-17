import { Router } from "express";
import { validateRequest } from "../../utils/express/wrappers";
import { UsersController } from "./users.controller";
import { 
    createUsersRequestSchema, getAllUsersRequestSchema, getUsersByQueryRequestSchema
} from "./users.validations";

export const usersRouter = Router();

usersRouter.post("/", validateRequest(createUsersRequestSchema));

usersRouter.get("/getAll", validateRequest(getAllUsersRequestSchema));

usersRouter.get("/", validateRequest(getUsersByQueryRequestSchema))
