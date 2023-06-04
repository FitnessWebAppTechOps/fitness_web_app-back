export interface IRecipe {
  recipeName: string;
  mealType: MealType;
  macros: IMacros;
  price: number;
}

export interface IMacros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  cholesterol: number;
  fiber: number;
  sodium: number;
  water: number;
  calcium: number;
  iron: number;
  magnesium: number;
  phosphorus: number;
  zinc: number;
  potassium: number;
}

export enum MealType {
  breakfast = "BREAKFAST",
  lunch = "LUNCH",
  dinner = "DINNER",
}

export interface RecipeDocument extends IRecipe {
  _id?: string;
}

