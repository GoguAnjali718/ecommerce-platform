import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/login/LoginPage";
import { RegistrationPage } from "./components/register/RegistrationPage";
import { ProductsListPage } from "./components/products/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/products" element={<ProductsListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
