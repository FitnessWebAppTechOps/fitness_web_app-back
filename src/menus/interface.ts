interface MealOption {
  name: string;
  description: string;
}

interface Meal {
  name: string;
  options: MealOption[];
}

interface DayMenu {
  date: Date;
  meals: Meal[]; // TODO: change to IRecipes array
}

interface MonthlyMenu {
  menus: DayMenu[];
}
