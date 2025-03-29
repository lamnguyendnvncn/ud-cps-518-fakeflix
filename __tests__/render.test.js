import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SkeletonBanner from "../src/components/SkeletonBanner/SkeletonBanner";

describe("SkeletonBanner", () => {
  test("renders all skeleton elements correctly", () => {
    render(<SkeletonBanner />);

    // Check for title
    expect(screen.getByTestId("skeleton-title")).toBeInTheDocument();

    // Check for two buttons
    const buttons = screen.getAllByTestId("skeleton-button");
    expect(buttons.length).toBe(2);

    // Check for three text elements
    const texts = screen.getAllByTestId("skeleton-text");
    expect(texts.length).toBe(3);
  });
});
