import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Calculator from "@/app/calculator/page";

describe("Calculator Page", () => {
  it("should render the title", () => {
    render(<Calculator />);
    expect(screen.getByText("BMI Calculator")).toBeDefined();
  });
});