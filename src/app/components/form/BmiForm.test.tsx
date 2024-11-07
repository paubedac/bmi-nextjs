import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import BmiForm from '@/app/components/form/BmiForm';

describe('BmiForm', () => {
  it('renders', () => {
    const dummyfn = vi.fn()
    render(
      <BmiForm
        setBmi={dummyfn}
      />
    );
    const heighInput = screen.getByLabelText('Height (cms)');
    const weightInput = screen.getByLabelText('Weight (kgs)');

    fireEvent.change(heighInput, { target: { value: 180}})
    fireEvent.change(weightInput, { target: { value: 100}})
    
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDefined();
    fireEvent.click(submitButton);
    expect(dummyfn).toHaveBeenCalledTimes(1);
  });
});
