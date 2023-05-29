import { Router } from "express";
import { validateRequest, wrapController } from "../../utils/express/wrappers";
import { UsersController } from "./controller";
import {
  createUsersRequestSchema,
  getAllUsersRequestSchema,
  getUsersByQueryRequestSchema,
  updateUserRequestSchema,
  deleteUserRequestSchema,
  getUserByIdRequestSchema,
  getUsersCounterRequestSchema
} from "./validations";
import { authorizeUser } from "../../middleware/auth";

export const usersRouter = Router();

usersRouter.post("/users/login", UsersController.login);

usersRouter.post(
  "/",
  validateRequest(createUsersRequestSchema),
  authorizeUser,
  wrapController(UsersController.createUser)
);

usersRouter.get(
  "/all",
  validateRequest(getAllUsersRequestSchema),
  wrapController(UsersController.getAllUsers)
);

usersRouter.get(
  "/",
  validateRequest(getUsersByQueryRequestSchema),
  wrapController(UsersController.getUsersByQuery)
);

usersRouter.get(
  "/:id",
  validateRequest(getUserByIdRequestSchema),
  wrapController(UsersController.getUserById)
);

usersRouter.get(
  "/count",
  validateRequest(getUsersCounterRequestSchema),
  wrapController(UsersController.getUsersCounter)
);

usersRouter.put(
  "/:id",
  validateRequest(updateUserRequestSchema),
  wrapController(UsersController.updateUser)
);

usersRouter.delete(
  "/:id",
  validateRequest(deleteUserRequestSchema),
  wrapController(UsersController.deleteUser)
);
