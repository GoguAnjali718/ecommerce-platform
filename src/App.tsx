import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/login/LoginPage";
import { RegistrationPage } from "./components/register/RegistrationPage";
import { ListOfProducts } from "./components/products/ProductPage";
import { UserProvider } from "./contexts/UserAuthenticationContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/products" element={<ListOfProducts />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
