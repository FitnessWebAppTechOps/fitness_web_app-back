import { Router } from "express";
import { wrapAsync } from "../utils/wrapper";
import { ValidateRequest } from "../utils/joi";
import { UsersController } from "./users.controller";
// import {
//   createSurveyReqSchema, addQuestionReqSchema, getSurveyByIdReqSchema, getQuestionReqSchema, updateQuestionReqSchema, getAllReqSchema, updateContentReqSchema, updateRepliersReqSchema, updateIsOpenReqSchema,
// } from './validator/users.schema';

const UsersRouter: Router = Router();

UsersRouter.post(
  "/createUser",
  ValidateRequest(createUserReqSchema),
  wrapAsync(UsersController.createUser)
);
UsersRouter.get(
  "/createUser",
  ValidateRequest(getAllUsersReqSchema),
  wrapAsync(UsersController.getAllUsers)
);
UsersRouter.get(
  "/createUser",
  ValidateRequest(getUserByIdReqSchema),
  wrapAsync(UsersController.getUserById)
);
UsersRouter.get(
  "/createUser",
  ValidateRequest(getUserByCountryReqSchema),
  wrapAsync(UsersController.getUserByCountry)
);
UsersRouter.get(
  "/createUser",
  ValidateRequest(getUserByAgeReqSchema),
  wrapAsync(UsersController.getUserByAge)
);
UsersRouter.get(
  "/createUser",
  ValidateRequest(getUserByGenderReqSchema),
  wrapAsync(UsersController.getUserByGender)
);
UsersRouter.delete(
  "/createUser",
  ValidateRequest(deleteUserByIdReqSchema),
  wrapAsync(UsersController.deleteUserById)
);
UsersRouter.put(
  "/createUser",
  ValidateRequest(updateUserDetailsByIdReqSchema),
  wrapAsync(UsersController.updateUserDetailsById)
);
UsersRouter.put(
  "/createUser",
  ValidateRequest(updateUserFitnessProfileByIdReqSchema),
  wrapAsync(UsersController.updateUserFitnessProfileById)
);

export { UsersRouter };
