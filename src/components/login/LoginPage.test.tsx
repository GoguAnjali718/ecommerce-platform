import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";

describe("render the login component", () => {
  it("check the user input fields", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const usernameInput = screen.getByPlaceholderText("Enter username");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

 
});

it("should it navigate to registrtion page Register button is clicked", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const registerButton = screen.getByText(/Register/i);
  fireEvent.click(registerButton);
  expect(window.location.pathname).toBe("/register");
});

it("should create formData on form submit", () => {
  const { getByLabelText, getByRole } = render(
    <MemoryRouter>
    <LoginPage />
  </MemoryRouter>
  );
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const submitButton = getByRole("button", { name: /submit/i });
  fireEvent.change(usernameInput, { target: { value: "Anji" } });
  fireEvent.change(passwordInput, { target: { value: "iam" } });
  fireEvent.submit(submitButton);
  // expect(screen.queryByText("Form submitted with:")).toBeInTheDocument();
});
