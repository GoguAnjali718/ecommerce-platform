import React from "react";
import "/Users/anjaligogu/Documents/CODE/myntra/src/components/login/Styles.css";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function RegistrationPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    const formData = new FormData(e.currentTarget as HTMLFormElement);
  };

  const navigateToProductPage = () => {
    navigate("/products");
  };
  const navigateToLoginPage =()=>{
    navigate('/')
  }
  return (
    <div className="Container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter username"
        />

        <TextField
          required
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter password"
        />
        <TextField
          required
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Confirm password"
        />

        <Button
          onClick={navigateToProductPage}
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>

        <div
          className="register-group"
          style={{ marginTop: "16px", textAlign: "center" }}
        >
          <p>Already have an account?</p>
          <Button
            className="register-button"
            onClick={navigateToLoginPage}
            color="secondary"
            variant="text"
          >
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
}
