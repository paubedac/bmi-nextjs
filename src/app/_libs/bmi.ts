import { UNITS, WEIGHT_CATEGORIES } from "@/app/constants/units";
import {
  MIN_GAUGE_VALUE,
  MAX_GAUGE_VALUE,
} from "@/app/constants/gauge";

export function bmiCalculator(unit: string, height: number, weight: number): number {
  if (height == 0) {
    return -1;
  }
  if (unit == UNITS.Metric) {
    return weight/(Math.pow(height / 100, 2));
  } else {
    return 703 * weight/(Math.pow(height, 2));
  }
}

export function getWeightCategory(bmiValue: number): string {
  if (bmiValue < WEIGHT_CATEGORIES?.Normal?.start) {
    return WEIGHT_CATEGORIES.Underweight.name;
  } else if (bmiValue >= WEIGHT_CATEGORIES.Normal.start && bmiValue < WEIGHT_CATEGORIES.Overweight.start) {
    return WEIGHT_CATEGORIES.Normal.name;
  } else if (bmiValue >= WEIGHT_CATEGORIES.Overweight.start && bmiValue < WEIGHT_CATEGORIES.Obese.start) {
    return WEIGHT_CATEGORIES.Overweight.name;
  } else {
    return WEIGHT_CATEGORIES.Obese.name;
  }
}

export function bmiToGauge(bmi: number): string {
  if (bmi < MIN_GAUGE_VALUE) {
    return "-90deg";
  }

  if (bmi > MAX_GAUGE_VALUE) {
    return "90deg";
  }

  return `${((bmi - MIN_GAUGE_VALUE)/(MAX_GAUGE_VALUE - MIN_GAUGE_VALUE)*180-90).toFixed(0)}deg`;
}
