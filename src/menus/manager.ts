import { DocumentNotFoundError } from "../utils/errors";
import { IMenu, IMenuDocument } from "./interface";
import { MenusModel } from "./model";

export class MenusManager {
    static async createMenu(menu: IMenu): Promise<IMenuDocument> {
        return MenusModel.create(menu);
    }

    static async getAllMenus(): Promise<IMenuDocument[]> {
        return MenusModel.find();
    }

    static async getMenuById(menuId: string): Promise<IMenuDocument> {
        return MenusModel.findById(menuId).orFail(new DocumentNotFoundError(menuId)).exec();
    } 

    static async getMenuByUserId(userId: string): Promise<IMenuDocument> {
        return MenusModel.findById(userId).orFail(new DocumentNotFoundError(userId)).exec();
    }

    static async updateMenu(menuId: string, update: Partial<IMenu>): Promise<IMenuDocument> {
        return MenusModel.findByIdAndUpdate(menuId, update, { new: true }).orFail(new DocumentNotFoundError(menuId)).exec();
    } 

    static async deleteMenu(menuId: string): Promise<IMenuDocument> {
        return MenusModel.findByIdAndDelete(menuId).orFail(new DocumentNotFoundError(menuId)).exec();
    }
}