import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import RadioInputForm from '@/app/components/form/RadioInputForm';

describe('RadioInputForm', () => {
  it('should render', () => {
    const dummyProps = {
      id: 'metric',
      name: 'metric',
      label: 'Metric',
      value: 'Metric',
      checked: false,
      onChange: vi.fn(),
    };

    render(
        <RadioInputForm
          {...dummyProps}
        />
    );
    expect(screen.getByText("Metric")).toBeDefined();
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(dummyProps.onChange).toHaveBeenCalledTimes(1);
  });
});

