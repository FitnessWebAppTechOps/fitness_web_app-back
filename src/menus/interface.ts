import { IRecipe } from "../utils/interfaces/recipes";

export interface Meal {
  mealNumber: number;
  options: IRecipe[];
}

export interface DayMenu {
  date: Date;
  meals: Meal[]; // TODO: change to IRecipes array
}

export interface MonthlyMenu {
  menus: DayMenu[];
}
