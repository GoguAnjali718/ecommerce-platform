import React from "react";
import { RegistrationPage } from "./RegistrationPage";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("should check user input fields", () => {
  render(
    <MemoryRouter>
      <RegistrationPage />
    </MemoryRouter>
  );
  expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
});

// it("should create formData on form submit", () => {
//     render(
//  <MemoryRouter><RegistrationPage/></MemoryRouter>
// );
//     fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'Anji' } });
//     fireEvent.change(screen.getByPlaceholderText('Enter password'), { target: { value: 'iam' } });
//     fireEvent.change(screen.getByPlaceholderText('Confirm password'), { target: { value: 'iam' } });

//     const form = document.querySelector('form');
//     fireEvent.submit(form)
//      const formData = new FormData(form);
//      expect(formData.get('username')).toBe('Anji');
//       expect(formData.get('password')).toBe('iam');
//       expect(formData.get('confirmPassword')).toBe('iam');
// });

it("should it naviagete to login page when login button is pressed", () => {
  render(
    <MemoryRouter>
      <RegistrationPage />
    </MemoryRouter>
  );
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  expect(window.location.pathname).toBe("/");
});

it("should it navigate to to product page when submit button is clicked", () => {
  render(
    <MemoryRouter>
      <RegistrationPage />
    </MemoryRouter>
  );
  const submitButton = screen.getByText(/Submit/i);
  fireEvent.click(submitButton);
  expect(window.location.pathname).toBe("/products");
});
