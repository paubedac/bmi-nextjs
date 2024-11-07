import { UNITS } from "@/app/constants/units";

export function getHeightUnits(unit: string):string {
  if (unit == UNITS.Metric) {
    return "cms";
  } else {
    return "inches";
  }
}

export function getWeightUnits(unit: string):string {
  if (unit == UNITS.Metric) {
    return "kgs";
  } else {
    return "lbs";
  }
}