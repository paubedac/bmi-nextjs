import { WEIGHT_CATEGORIES } from "@/app/constants/units";

interface GaugeCategory {
    name: string;
    angle: string;
    color: string;
}

export const GAUGE_CATEGORIES: GaugeCategory[] = [
  {
    name: WEIGHT_CATEGORIES.Underweight.name,
    angle: "-rotate-45",
    color: "bg-yellow-400"
  },
  {
    name: WEIGHT_CATEGORIES.Normal.name,
    angle: "rotate-6",
    color: "to-green-500"
  },
  {
    name: WEIGHT_CATEGORIES.Overweight.name,
    angle: "rotate-45",
    color: "to-orange-500"
  },
  {
    name: WEIGHT_CATEGORIES.Obese.name,
    angle: "rotate-[75deg]",
    color: "to-red-600"
  },
]

export const MIN_GAUGE_VALUE = 10;
export const MAX_GAUGE_VALUE = 40;