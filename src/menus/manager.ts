import { IMenu, IMenuDocument } from "./interface";
import { MenusModel } from "./model";

export class MenusManager {
    static async createMenu(menu: IMenu): Promise<IMenuDocument> {
        return MenusModel.create(menu);
    }
}