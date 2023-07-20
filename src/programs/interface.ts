export interface IProgram {
  userId: number;
  programId: number;
  trainingLevel: TrainingLevel;
  musclesGroups: MusclesGroups;
  programLength: number;
  purpose: FitnessGoal;
  price: number;
  purchaseDate: Date;
  startingDate: Date;
  menu: Options[]; // restructure menu field
}

export enum TrainingLevel {
  Beginner = "BEGINNER",
  Moderate = "MODERATE",
  Advanced = "ADVANCED"
}

export enum MusclesGroups {
  Triceps = "TRICEPS",
  Biceps = "BICEPS",
  Forearms = "FOREARMS",
  Shoulders = "SHOULDERS",
  Chest = "CHEST",
  Back = "BACK",
  Legs = "LEGS"
}

export enum FitnessGoal {
  WeightLoss = "WEIGHT_LOSS",
  MuscleGain = "MUSCLE_GAIN",
  StrengthTraining = "STRENGTH_TRAINING",
  EnduranceTraining = "ENDURANCE_TRAINING",
  GeneralHealthWellness = "GENERAL_HEALTH_WELLNESS"
}

// array of recipes names (IRecipe.name)
export type Options = string[];

export interface IProgramDocument extends IProgram {
  
  _id?: string;
}
