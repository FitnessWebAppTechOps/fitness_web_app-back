import { Router } from "express";
import { validateRequest, wrapController } from "../../utils/express/wrappers";
import { UsersController } from "./users.controller";
import { 
    createUsersRequestSchema, getAllUsersRequestSchema, getUsersByQueryRequestSchema, updateUserRequestSchema, deleteUserRequestSchema, getUserByIdRequestSchema
} from "./users.validations";

export const usersRouter = Router();

usersRouter.post("/", validateRequest(createUsersRequestSchema), wrapController(UsersController.createUser));

usersRouter.get("/getAll", validateRequest(getAllUsersRequestSchema));

usersRouter.get("/", validateRequest(getUsersByQueryRequestSchema), wrapController(UsersController.getUsersByQuery));

usersRouter.get("/:id", validateRequest(getUserByIdRequestSchema), wrapController(UsersController.getUserById))

usersRouter.put("/:id", validateRequest(updateUserRequestSchema), wrapController(UsersController.updateUser));

usersRouter.delete(":/id", validateRequest(deleteUserRequestSchema));
