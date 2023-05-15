import { Router } from "express";
import { wrapAsync } from "../utils/wrapper";
import { ValidateRequest } from "../utils/joi";
import { UsersController } from "./users.controller";
// import {
//   createSurveyReqSchema, addQuestionReqSchema, getSurveyByIdReqSchema, getQuestionReqSchema, updateQuestionReqSchema, getAllReqSchema, updateContentReqSchema, updateRepliersReqSchema, updateIsOpenReqSchema,
// } from './validator/users.schema';

const UsersRouter: Router = Router();

export { UsersRouter };
