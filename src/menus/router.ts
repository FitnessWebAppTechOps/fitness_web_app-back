import { Router } from "express";
import { validateRequest, wrapController } from "../utils/wrappers";
import { 
    createMenusRequestSchema, deleteMenuRequestSchema, getAllMenusRequestSchema, getMenuByIdRequestSchema, getMenuByUserIdRequestSchema, updateMenuRequestSchema 
} from "./validation";
import { MenusController } from "./controller";

export const menusRouter = Router();

menusRouter.post('/', validateRequest(createMenusRequestSchema), wrapController(MenusController.createMenu)); 

menusRouter.get('/All', validateRequest(getAllMenusRequestSchema), wrapController(MenusController.getAllMenus));

menusRouter.get('/:id', validateRequest(getMenuByIdRequestSchema));

menusRouter.get('/', validateRequest(getMenuByUserIdRequestSchema));

menusRouter.put('/:id', validateRequest(updateMenuRequestSchema));

menusRouter.delete(':id', validateRequest(deleteMenuRequestSchema));