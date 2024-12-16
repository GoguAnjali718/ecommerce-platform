import { render, waitFor, screen } from "@testing-library/react";
import { UserProvider, useUserContext } from "./UserAuthenticationContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([{ username: "A", password: "c", confirmPassword: "c" }]),
  })
) as jest.Mock;

it("throws an error when used outside of UserProvider", () => {
  const TestComponent = () => {
    useUserContext();
    return null;
  };
  expect(() => render(<TestComponent />)).toThrow(
    "useUserContext must be used within a UserProvider"
  );
});
