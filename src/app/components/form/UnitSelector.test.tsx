import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import UnitSelector from '@/app/components/form/UnitSelector';
import { UNITS } from '@/app/constants/units';

describe("UnitSelector", () => {
  it("should render", () => {
    const dummyfn = vi.fn();
    render(
      <UnitSelector
        selectedUnit={UNITS.Metric}
        onSelectUnit={dummyfn}
      />
    );

    const metricInput = screen.getByText("Metric")
    const imperialInput = screen.getByText("Imperial");
    expect(metricInput).toBeDefined();
    expect(imperialInput).toBeDefined();

    const radios = screen.getAllByRole('radio');
    fireEvent.click(radios[1]);
    expect(dummyfn).toHaveBeenCalledTimes(1);
  });
});
