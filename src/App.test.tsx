import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders the App component", () => {
    render(<App />);
    const loginPageElement = screen.getByTestId("loginComponent");
    expect(loginPageElement).toBeInTheDocument();
  });
  it("should render the login page correctly", () => {
    render(<App />);
    const loginElement = screen.getByTestId("loginComponent");
    expect(loginElement).toBeInTheDocument();
  });
});
