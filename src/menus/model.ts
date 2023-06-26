import mongoose, { Schema } from "mongoose";
import { config } from "../config";
import {
  IMeal,
  IDayMenu,
  IMonthlyMenu,
  IMenu,
  IMenuDocument
} from "./interface";

const mealSchema: Schema<IMeal> = new Schema<IMeal>({
  mealNumber: {
    type: Number,
    required: true
  },
  options: {
    type: [String],
    ref: "recipes",
    required: true
  }
});

const dayMenuSchema: Schema<IDayMenu> = new Schema<IDayMenu>({
  date: {
    type: Date,
    required: true
  },
  meals: {
    type: [mealSchema],
    required: true
  }
});

const monthlyMenuSchema: Schema<IMonthlyMenu> = new Schema<IMonthlyMenu>({
  menus: {
    type: [dayMenuSchema],
    required: true
  }
});

const menusSchema: Schema<IMenu> = new Schema<IMenu>({
  userId: {
    type: String,
    required: true
  },
  monthlyMenus: {
    type: [monthlyMenuSchema],
    required: true
  }
});

export const MenusModel = mongoose.model<IMenuDocument>(
  config.mongo.menusCollectionName,
  menusSchema
);
