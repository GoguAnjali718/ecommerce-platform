import React from "react";
import "/Users/anjaligogu/Documents/CODE/myntra/src/components/login/Styles.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserAuthenticationContext";
import { TextField, Box, Button } from "@mui/material";

export function LoginPage() {
  const navigate = useNavigate();
  const { userData } = useUserContext();

  const navigateToRegistrationPage = () => {
    navigate("/register");
  };

  const handleSubmit = (e: React.FormEvent) => {
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (username === "" || password === "") {
      alert("Both fields are required");
    } else {
      const user = userData.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        navigate("/products");
        alert("User login Successful");
      } else {
        alert("No user found. Please register.");
      }
    }
  };

  return (
    <div className="Container">
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
            onClick={navigateToRegistrationPage}
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
