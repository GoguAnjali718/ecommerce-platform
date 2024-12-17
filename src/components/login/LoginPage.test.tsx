import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";
import { useUserContext } from "../../contexts/UserAuthenticationContext";

jest.mock("../../contexts/UserAuthenticationContext");

describe("LoginPage", () => {
  const mockUserContext = {
    userData: [{ username: "Anji", password: "12" }],
  };
  beforeEach(() => {
    (useUserContext as jest.Mock).mockReturnValue(mockUserContext);
  });

  it("should display login form", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("should show alert when fields are empty", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    global.alert = jest.fn();
    fireEvent.click(screen.getByText(/submit/i));
    expect(global.alert).toHaveBeenCalledWith("Both fields are required");
  });

  it("should navigate to products page on successful login", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "Anji" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "12" },
    });
    fireEvent.click(screen.getByText(/submit/i));
    expect(global.alert).toHaveBeenCalledWith("User login Successful");
  });
  it("should navigate to registration page on register button click", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText(/register/i));
    expect(window.location.pathname).toBe("/");
  });
  it("should show alert when no user found", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(usernameInput, { target: { value: "Anju" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    global.alert = jest.fn();
    fireEvent.click(screen.getByText(/submit/i));
    expect(global.alert).toHaveBeenCalledWith(
      "No user found. Please register."
    );
  });
});
