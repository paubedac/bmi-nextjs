import { expect, test, describe} from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultMessage from '@/app/components/ResultMessage';

describe('ResultMessage', () => {
  test('renders', () => {
    const bmi = 24.90;
    const expectBMIMessage = `Your BMI score is ${bmi.toFixed(2)}`;
    const expectedWeightClassificationMessage = 'You are classified as Normal';
    render(<ResultMessage bmi={bmi} />
    );
    expect(screen.getByText(expectBMIMessage)).toBeDefined();
    expect(screen.getByText(expectedWeightClassificationMessage)).toBeDefined();
  })
});