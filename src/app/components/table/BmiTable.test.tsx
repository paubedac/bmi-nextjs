import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import BmiTable from '@/app/components/table/BmiTable';
import { WEIGHT_CATEGORIES } from '@/app/constants/units';

describe('BmiTable', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(
      <BmiTable
        weightCategory=''
      />
    );
    expect(screen.getByText("Underweight")).toBeDefined();
  });
  it('renders the underweight bmi selected', () => {
    render(
      <BmiTable
        weightCategory={WEIGHT_CATEGORIES.Underweight.name}
      />
    );
    expect(screen.getByText("Underweight")).toBeDefined();
  });

  it('renders the normal bmi selected', () => {
    render(
      <BmiTable
        weightCategory={WEIGHT_CATEGORIES.Normal.name}
      />
    );
    expect(screen.getByText("Normal")).toBeDefined();
  });

  it('renders the overweight bmi selected', () => {
    render(
      <BmiTable
        weightCategory={WEIGHT_CATEGORIES.Overweight.name}
      />
    );
    expect(screen.getByText("Overweight")).toBeDefined();
  });

  it('renders the obese bmi selected', () => {
    render(
      <BmiTable
        weightCategory={WEIGHT_CATEGORIES.Obese.name}
      />
    );
    expect(screen.getByText("Obese")).toBeDefined();
  });
});