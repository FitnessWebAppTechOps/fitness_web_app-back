import { IRecipe, RecipeDocument } from "./interface";
import { RecipesModel } from "./model";

export class RecipesManager {
    static async createRecipes(recipes: IRecipe): Promise<RecipeDocument> {
        return RecipesModel.create(recipes);
    }

}