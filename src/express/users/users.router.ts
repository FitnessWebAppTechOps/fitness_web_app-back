import { Router } from "express";
import { validateRequest, wrapController } from "../../utils/express/wrappers";
import { UsersController } from "./users.controller";
import { 
    createUsersRequestSchema, getAllUsersRequestSchema, getUsersByQueryRequestSchema, updateUserRequestSchema, deleteUserRequestSchema
} from "./users.validations";

export const usersRouter = Router();

usersRouter.post("/", validateRequest(createUsersRequestSchema), wrapController(UsersController.createUser));

usersRouter.get("/getAll", validateRequest(getAllUsersRequestSchema));

usersRouter.get("/", validateRequest(getUsersByQueryRequestSchema));

usersRouter.put("/:id", validateRequest(updateUserRequestSchema));

usersRouter.delete(":/id", validateRequest(deleteUserRequestSchema));
