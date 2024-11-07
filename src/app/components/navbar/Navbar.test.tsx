import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '@/app/components/navbar/Navbar';

describe("Navbar", () => {
  it("renders", () => {
    render(<Navbar />);
    expect(screen.getByText("Open main menu")).toBeDefined();
  });
});