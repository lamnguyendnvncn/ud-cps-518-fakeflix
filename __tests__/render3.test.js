import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import InputField from "../src/components/InputField/InputField";

describe("InputField", () => {
  test("renders input field with error message", () => {
    render(<InputField type="text" placeholder="Enter text" name="inputField" errors={{ inputField: true }} validationMessage="Error message" />);

    // Check for input element
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();

    // Check for error message element
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
});
