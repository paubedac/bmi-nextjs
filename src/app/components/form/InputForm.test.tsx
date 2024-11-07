import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputForm from '@/app/components/form/InputForm';

describe('InputForm', () => {
  it('renders', () => {
    const dummyfn = vi.fn()
    render(
      <InputForm
        label={"dummy-label"}
        value={1}
        onChange={dummyfn}
      />
    );
    expect(screen.getByText("dummy-label")).toBeDefined();
  });
});
