import { FilterQuery } from "mongoose";
import { RecipesDocumentNotFoundError } from "../utils/errors/errors";
import { IRecipe, IRecipeDocument, MealType } from "./interface";
import { RecipesModel } from "./model";

export class RecipesManager {
  static async createRecipe(recipe: IRecipe): Promise<IRecipeDocument> {
    return RecipesModel.create(recipe);
  }

  static async getRecipeByID(recipeId: string): Promise<IRecipeDocument> {
    return RecipesModel.findById(recipeId)
      .orFail(new RecipesDocumentNotFoundError(recipeId))
      .exec();
  }

  static async getRecipesByQuery(
    query: IRecipeDocument[keyof IRecipeDocument]
  ): Promise<IRecipeDocument[]> {
    const filter: FilterQuery<IRecipeDocument> = {};
    filter[query as keyof IRecipeDocument] = { $exists: true }; // Create a filter query based on the specified property key
    return RecipesModel.find(filter).exec();
  }

  static async updateRecipeById(
    recipeId: string,
    updatedRecipe: Partial<IRecipe>
  ): Promise<IRecipeDocument | null> {
    return RecipesModel.findByIdAndUpdate(recipeId, updatedRecipe, {
      new: true,
    })
      .orFail(new RecipesDocumentNotFoundError(recipeId))
      .exec();
  }

  static async deleteRecipeById(recipeId: string): Promise<IRecipeDocument> {
    return RecipesModel.findByIdAndDelete(recipeId).orFail().exec();
  }

  static async getAllRecipes(): Promise<IRecipeDocument[]> {
    return RecipesModel.find().exec();
  }
}
