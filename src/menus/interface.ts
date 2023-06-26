import { IRecipe } from "../utils/interfaces/recipes";

export interface IMeal {
  mealNumber: number;
  options: IRecipe[];
}

export interface IDayMenu {
  date: Date;
  meals: IMeal[]; 
}

export interface IMonthlyMenu {
  menus: IDayMenu[];
}
