import { Router } from "express";
import { validateRequest } from "../utils/wrappers";

export const menusRouter = Router();

menusRouter.post("/", validateRequest(createMenusRequestSchema)); 