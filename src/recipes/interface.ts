export interface IRecipe {
  userId?: string;
  recipeName: string;
  mealType: MealType;
  macros: IMacros;
}

export interface IMacros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  cholesterol?: number;
  sodium?: number;
  water?: number;
  calcium?: number;
  iron?: number;
  magnesium?: number;
  phosphorus?: number;
  zinc?: number;
  potassium?: number;
}

export enum MealType {
  breakfast = "BREAKFAST",
  lunch = "LUNCH",
  dinner = "DINNER",
  snack = "SNACK",
}

export interface IRecipeDocument extends IRecipe {
  _id?: string;
}
