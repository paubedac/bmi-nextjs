import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Homepage", () => {
  it("should render the title", () => {
    render(<Home />);
    expect(screen.getByText("BMI Calculator")).toBeDefined();
  });
});