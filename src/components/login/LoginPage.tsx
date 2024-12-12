import React, { useState } from "react";
import "/Users/anjaligogu/Documents/CODE/myntra/src/components/login/Styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button } from "@mui/material";

export function LoginPage() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
    console.log("login");
  };

  const handleSubmit = (e: React.FormEvent) => {

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    // for(let [key, value] of formData.entries()){

    // }
  };

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

        <Button
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
          <p>Don't have an account?</p>
          <Button
            className="register-button"
            onClick={goToRegister}
            color="secondary"
            variant="text"
          >
            Register
          </Button>
        </div>
      </Box>
    </div>
  );
}
