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
  /* menu: IMenu; (menu field is'nt needed because I can check if a user has a menu in his program using a compositor request -
     I ask for the menu of the program using the user id. of course it is optional fot the user to purchase a menu with his program 
     so the request might return an error or null / undefined value). */
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

export interface IProgramDocument extends IProgram {
  
  _id?: string;
}
