import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../pages/loginPage";

describe("render the login component", () => {
  it("check the user input fields", () => {
    render(<LoginPage />);
    const usernameInput = screen.getByTestId("userInputText");
    const passwordInput = screen.getByTestId("passwordInputText");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("allows user to type in the input fields", () => {
    render(<LoginPage />);

    const usernameInput = screen.getByTestId("userInputText");
    const passwordInput = screen.getByTestId("passwordInputText");

    fireEvent.change(usernameInput, { target: { value: "Anjali" } });
    expect(usernameInput.value).toBe("Anjali");

    fireEvent.change(passwordInput, { target: { value: "415" } });
    expect(passwordInput.value).toBe("415");
  });
});
