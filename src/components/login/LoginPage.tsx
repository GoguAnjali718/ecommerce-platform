import React from "react";
import "/Users/anjaligogu/Documents/CODE/myntra/src/components/login/Styles.css";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button } from "@mui/material";

export function LoginPage() {
  const navigate = useNavigate();

  const navigateToRegistrtionPage = () => {
    navigate("/register");
    console.log("login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (!username || !password) {
      alert("All fields are required");
      return;
    }
    navigate("/products");
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
            onClick={navigateToRegistrtionPage}
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
