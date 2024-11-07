import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BMI from "@/app/bmi/page";

describe("About", () => {
  it("should render the title", () => {
    render(<BMI />);
    expect(screen.getByText("Body Mass Index")).toBeDefined();
  });
});