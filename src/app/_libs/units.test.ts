import { expect, test, describe } from 'vitest';
import { getHeightUnits, getWeightUnits} from './units';
import { UNITS } from '@/app/constants/units';

describe('units utils', () => {
  test('metric units text are shown when metric units is selected ', () => {
    expect(getHeightUnits(UNITS.Metric)).toEqual("cms");
    expect(getWeightUnits(UNITS.Metric)).toEqual("kgs");
  })
  test('imperial units text are shown when Imperial units is selected ', () => {
    expect(getHeightUnits(UNITS.Imperial)).toEqual("inches");
    expect(getWeightUnits(UNITS.Imperial)).toEqual("lbs");
  })
});
