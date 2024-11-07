import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Limitations from "@/app/limitations/page";

describe("Limitations", () => {
  it("should render the title", () => {
    render(<Limitations />);
    expect(screen.getByText("Limitations of BMI")).toBeDefined();
  });
});