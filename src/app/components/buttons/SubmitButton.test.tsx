import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubmitButton from '@/app/components/buttons/SubmitButton';

describe('SubmitButton', () => {
  it('should render', () => {
    render(
      <SubmitButton
        label={"dummy-label"}
      />
    );
    expect(screen.getByText("dummy-label")).toBeDefined();
  });
});
