import { expect, test, describe } from 'vitest';
import { bmiCalculator, getWeightCategory, bmiToGauge } from './bmi';
import { UNITS, WEIGHT_CATEGORIES } from '@/app/constants/units';

describe('bmiCalculator', () => {
  test('return bmi using metric units', () => {
    expect(bmiCalculator(UNITS.Metric, 180, 100)).toEqual(30.864197530864196);
  })
  test('return bmi equal to 0 using metric units', () => {
    expect(bmiCalculator(UNITS.Metric, 0, 100)).toEqual(-1);
  })
  test('return bmi index using imperial units', () => {
    expect(bmiCalculator(UNITS.Imperial, 72, 220)).toEqual(29.834104938271604);
  })
  test('return bmi equal to 0 using metric units', () => {
    expect(bmiCalculator(UNITS.Imperial, 0, 220)).toEqual(-1);
  })
});

describe('bmiToGauge', () => {
  test('returns -90deg for bmi under MIN_GAUGE_VALUE', () => {
    expect(bmiToGauge(0)).toEqual("-90deg");
  })
  test('returns 1 for bmi over MAX_GAUGE_VALUE', () => {
    expect(bmiToGauge(40.1)).toEqual("90deg");
  })
  test('returns value between 0 and 1 for bmi between MIN_GAUGE_VALUE and MAX_GAUGE_VALUE', () => {
    expect(bmiToGauge(25)).toEqual("0deg");
  })
});

describe('getWeightCategory', () => {
  test('returns underweight for bmi under 18.5', () => {
    expect(getWeightCategory(18.4)).toEqual(WEIGHT_CATEGORIES.Underweight.name);
  })
  test('returns normal for bmi between 18.5 and 25', () => {
    expect(getWeightCategory(21.1)).toEqual(WEIGHT_CATEGORIES.Normal.name);
  })
  test('returns overweight for bmi between 25 and 30', () => {
    expect(getWeightCategory(27.7)).toEqual(WEIGHT_CATEGORIES.Overweight.name);
  })
  test('returns obese for bmi over 30', () => {
    expect(getWeightCategory(30.1)).toEqual(WEIGHT_CATEGORIES.Obese.name);
  })
});
