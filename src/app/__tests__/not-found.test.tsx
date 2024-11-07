import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
  it("should render the title", () => {
    render(<NotFound />);
    expect(screen.getByText("Page not found")).toBeDefined();
  });
});