import React from "react";
import "/Users/anjaligogu/Documents/CODE/myntra/src/components/login/Styles.css";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function RegistrationPage() {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
    const userData = {
      username,
      password,
      confirmPassword,
    };
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.status === 201 || response.ok) {
        alert("Registration successful!");
        navigate("/products");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("error, posting the Data");
    }
  };

  return (
    <div className="Container">
      <div className="paragraph">
        <p></p>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="login-form"
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
