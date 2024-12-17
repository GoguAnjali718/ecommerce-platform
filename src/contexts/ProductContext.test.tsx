import { render, screen } from "@testing-library/react";
import { ProductProvider, useProductContext } from "./ProductContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          productName: "Kurta",
          price: "1200",
          rating: "4",
          sizes: ["S", "M", "L", "XL"],
          imageUrl:
            "/Users/anjaligogu/Documents/CODE/myntra/src/components/assets/imageUrls-7.jpeg",
          reviews: "The product is very comfortable and fits perfectly!",
        },
      ]),
  })
) as jest.Mock;

it("throws an error when used outside of UserProvider", () => {
  const TestComponent = () => {
    useProductContext();
    return null;
  };
  expect(() => render(<TestComponent />)).toThrow(
    "useUserContext must be used within a UserProvider"
  );
});

