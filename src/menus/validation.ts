import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";
import { MealType } from "../utils/interfaces/recipes";

const IMacrosSchema = z.object({
    calories: z.number(),
    protein: z.number(),
    carbs: z.number(),
    fat: z.number(),
    fiber: z.number(),
    cholesterol: z.number().optional(),
    sodium: z.number().optional(),
    water: z.number().optional(),
    calcium: z.number().optional(),
    iron: z.number().optional(),
    magnesium: z.number().optional(),
    phosphorus: z.number().optional(),
    zinc: z.number().optional(),
    potassium: z.number().optional(),
});

const IRecipeSchema = z.object({
    userId: zodMongoObjectId.optional(),
    recipeName: z.string(),
    mealType: z.nativeEnum(MealType),
    macros: IMacrosSchema,
});

const IMealsSchema = z.object({
    mealNumber: z.number(),
    options: z.array(IRecipeSchema),
});

const IDayMenuSchema = z.object({
    date: z.date(),
    meals: IMealsSchema,
});     

const IMonthlyMenuSchema = z.object({
    menus: z.array(IDayMenuSchema)
});

const IMenuSchema = z.object({
    userId: z.string(),
    monthlyMenus: z.array(IMonthlyMenuSchema),
});

// POST /api/menus
export const createMenusRequestSchema = z.object({
    body: IMenuSchema,
    query: z.object({}),
    params: z.object({}),
});

// GET /api/menus
export const getAllMenusRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({}),
});

// GET /api/menus/:id
export const getMenuByIdRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// GET /api/menus
export const getMenuByUserIdRequestSchema = z.object({
    body: z.object({
        id: zodMongoObjectId,
    }),
    query: z.object({}),
    params: z.object({}),
});

// PUT /api/menus/:id
export const updateMenuRequestSchema = z.object({
    body: IMenuSchema.partial(),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// DELETE /api/features/:id
export const deleteMenuRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
})





