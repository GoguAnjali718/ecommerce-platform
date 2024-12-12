import React, { useState } from "react";
import "../assets/loginStyles.css";

export function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="Container">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          data-testid="userInputText"
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input data-testid="passwordInputText"
          type="text"
          placeholder="Enter password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
        <div className="register-group">
          <p>Don't have an account?</p>
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
}
