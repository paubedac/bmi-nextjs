export enum UNITS {
  Metric = 'METRIC',
  Imperial = 'IMPERIAL',
}

interface WeightCategoryData {
  name: string;
  start: number;
  end?: number;
}

type WeightCategoryKey = "Underweight" | "Normal" | "Overweight" | "Obese";

interface WeightCategory {
  [key: string | WeightCategoryKey]: WeightCategoryData;
}

export const WEIGHT_CATEGORIES: WeightCategory = {
  "Underweight": {
    name: "Underweight",
    start: 0,
    end: 18.5,
  },
  "Normal": {
    name: "Normal",
    start: 18.5,
    end: 24.9,
  },
  "Overweight": {
    name: "Overweight",
    start: 25,
    end: 29.9
  },
  "Obese": {
    name: "Obese",
    start: 30,
  }
};
