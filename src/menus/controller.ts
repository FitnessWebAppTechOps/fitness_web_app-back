import { Response } from "express";
import { TypedRequest } from "../utils/zod";
import { createMenusRequestSchema, getAllMenusRequestSchema } from "./validation";
import { MenusManager } from "./manager";

export class MenusController {
    static async createMenu(req: TypedRequest<typeof createMenusRequestSchema>, res: Response) {
        res.json(await MenusManager.createMenu(req.body));     
    }

    // static async getAllMenus(req: TypedRequest<typeof getAllMenusRequestSchema>, res: Response) {
    //     res.json(await MenusManager.getAllMenus())
    // }
}