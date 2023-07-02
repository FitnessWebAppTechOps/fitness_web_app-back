import { Response } from "express";
import { TypedRequest } from "../utils/zod";
import {
  createMenusRequestSchema,
  deleteMenuRequestSchema,
  getAllMenusRequestSchema,
  getMenuByIdRequestSchema,
  getMenuByUserIdRequestSchema,
  updateMenuRequestSchema
} from "./validation";
import { MenusManager } from "./manager";

export class MenusController {
  static async createMenu(
    req: TypedRequest<typeof createMenusRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.createMenu(req.body));
  }

  static async getAllMenus(
    req: TypedRequest<typeof getAllMenusRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.getAllMenus());
  }

  static async getMenuById(
    req: TypedRequest<typeof getMenuByIdRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.getMenuById(req.params.id));
  }

  static async getMenuByUserId(
    req: TypedRequest<typeof getMenuByUserIdRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.getMenuByUserId(req.body.id));
  }

  static async updateMenu(
    req: TypedRequest<typeof updateMenuRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.updateMenu(req.params.id, req.body));
  }

  static async deleteMenu(
    req: TypedRequest<typeof deleteMenuRequestSchema>,
    res: Response
  ) {
    res.json(await MenusManager.deleteMenu(req.params.id));
  }
}
