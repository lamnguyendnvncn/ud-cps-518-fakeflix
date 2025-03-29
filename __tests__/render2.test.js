import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import PlayAnimation from "../src/components/PlayAnimation/PlayAnimation";

// Mock HTMLAudioElement
window.HTMLAudioElement.prototype.play = jest.fn();
window.HTMLAudioElement.prototype.pause = jest.fn();

describe("PlayAnimation", () => {
  test("renders animation elements correctly", () => {
    render(
      <MemoryRouter>
        {" "}
        // Wrap component with MemoryRouter
        <PlayAnimation />
      </MemoryRouter>
    );

    // Check for wrapper element
    expect(screen.getByTestId("PlayAnimation__wrp")).toBeInTheDocument();

    // Check for audio element
    expect(screen.getByTestId("audio")).toBeInTheDocument();

    // Check for text element
    expect(screen.getByText("FAKEFLIX")).toBeInTheDocument();
  });
});
