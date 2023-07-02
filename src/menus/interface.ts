export interface IMeal {
  mealNumber: number;
  options: string[]; //IRecipeDocument ID's
}

export interface IDayMenu {
  date: Date;
  meals: IMeal[];
}

export interface IMonthlyMenu {
  menus: IDayMenu[];
}

export interface IMenu {
  userId: string;
  monthlyMenus: IMonthlyMenu[];
}

export interface IMenuDocument extends IMenu {
  _id?: string;
}



