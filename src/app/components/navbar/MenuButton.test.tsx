import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuButton from '@/app/components/navbar/MenuButton';

describe("MenuButton", () => {
  let isOpen: boolean;
  const mockFn = vi.fn;
  it("should render a closed menu button", () => {
    isOpen = false;
    render(<MenuButton
      isOpen={isOpen}
      openMenu={mockFn}
    />);
    expect(screen.getByText("Open main menu")).toBeDefined();
  });
  it("should render a open menu button", () => {
    isOpen = true;
    render(<MenuButton
      isOpen={isOpen}
      openMenu={mockFn}
    />);
    expect(screen.getAllByText("Open main menu")).toBeDefined();
  });
});
