import { Gender } from "../express/users/interface";

export const calculateBMI = (weight: number, height: number): number => {
  // Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
  const bmi: number = weight / (height * height);
  return bmi;
};

export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: Gender
): number => {
  let bmr: number;

  if (gender === Gender.MALE) {
    // Calculate BMR for men using the Harris-Benedict equation:
    // BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.755 * age in years)
    bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
  } else {
    // Calculate BMR for women using the Harris-Benedict equation:
    // BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age in years)
    bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }
  return bmr;
};
