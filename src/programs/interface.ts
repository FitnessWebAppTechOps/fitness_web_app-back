enum TrainingLevel {
  Beginner = "BEGINNER",
  Moderate = "MODERATE",
  Advanced = "ADVANCED"
}

enum MusclesGroups {
  Triceps = "TRICEPS",
  Biceps = "BICEPS",
  Forearms = "FOREARMS",
  Shoulders = "SHOULDERS",
  Chest = "CHEST",
  Back = "BACK",
  Legs = "LEGS"
}

enum FitnessGoal {
  WeightLoss = "WEIGHT_LOSS",
  MuscleGain = "MUSCLE_GAIN",
  StrengthTraining = "STRENGTH_TRAINING",
  EnduranceTraining = "ENDURANCE_TRAINING",
  GeneralHealthWellness = "GENERAL_HEALTH_WELLNESS"
}

// array of recipes names (IRecipe.name)
type IOptions = string[];
