import React, { useState } from "react";

import "/Users/anjaligogu/Documents/CODE/myntra/src/components/products/ProductPageStyles.css";
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TextField } from "@mui/material";
import { useProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export function ListOfProducts() {
  const navigate = useNavigate();
  const { productData } = useProductContext();
  const [searchText, setSearchText] = useState("");
  const [listOfProducts, setListOfProduts] = useState(productData);
  const [wishlist, setWishlist] = useState<number[]>([]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    const filteredProducts = productData.filter((product) =>
      product.productName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setListOfProduts(filteredProducts);
  }
  function handleProductClick(productId: number) {
    navigate(`/items/${productId}`);
  }

  function toggleWishlist(productId: number) {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  function handleGoToWishlist() {
    const wishlistDetails = productData.filter((product) =>
      wishlist.includes(product.id)
    );
    navigate("/wishlist", { state: { wishlistDetails } });
  }

  return (
    <div className="bodyContainer">
      <div></div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              className="app-bar-icons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <IconButton color="inherit" onClick={() => navigate("/cart")}>
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={handleGoToWishlist}>
                <Badge badgeContent={wishlist.length} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="search-container">
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchText}
          onChange={handleSearch}
          fullWidth
          margin="normal"
          className="search-bar"
          placeholder="Type to search products..."
        />
      </div>
      <div className="products-container">
        {listOfProducts.length > 0 ? (
          listOfProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src="https://www.bullionknot.com/cdn/shop/files/Georgiamin_7.jpg?v=1715410709&width=1300"
                alt={product.productName}
                className="product-image"
                onClick={() => handleProductClick(product.id)}
              />
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-price">Price: ₹{product.price}</p>
              <p className="product-rating">Rating: {product.rating} ⭐</p>
              <button
                className="wishlist-button"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id)}♥ WISHLIST
              </button>
            </div>
          ))
        ) : (
          <p> No products are available for "{searchText}".</p>
        )}
      </div>
    </div>
  );
}

