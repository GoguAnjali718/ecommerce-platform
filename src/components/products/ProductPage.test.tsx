import React from "react";
import { Screen, fireEvent, render } from "@testing-library/react";
import { ListOfProducts } from "./ProductPage";
import { ProductProvider } from "../../contexts/ProductContext";
import { useProductContext } from "../../contexts/ProductContext";

jest.mock("../../contexts/ProductContext");

describe("ProductPage", () => {
  const mockProductsData = {
    productData: [
      {
        productName: "Kurta",
        price: "1200",
        rating: "4",
        sizes: ["S", "M", "L", "XL"],
        imageUrl:
          "/Users/anjaligogu/Documents/CODE/myntra/src/components/assets/imageUrls-7.jpeg",
        reviews: "The product is very comfortable and fits perfectly!",
      },
    ],
  };
  beforeEach(() => {
    (useProductContext as jest.Mock).mockReturnValue(mockProductsData);
  });
});
