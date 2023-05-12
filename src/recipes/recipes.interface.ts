export interface IRecipe {
  id?: string;
  recipeId: number;
  mealType: MealType;
  macros: IMacros;
  price: number;
  purchaseDate: Date;
  createdAt: Date;
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
