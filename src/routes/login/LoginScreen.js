import React from "react";
import { TextField } from "@mui/material";
import "./login.css";
import profileImg from "./../../resourses/profile-img.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function LoginScreen() {
  return (
    <div className="login-container">
      <div className="login-title">
        <h4>Login</h4>
      </div>
      <div className="login-picture">
        <img
          src={profileImg}
          alt="profile"
          style={{ width: "190px", height: "100px" }}
        />
      </div>
      <div className="login-content">
        <div className="Boxer">
          <TextField id="outlined-basic-1" label="Email" variant="outlined" />
        </div>
        <div className="Boxer">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="Boxer">
          <span className="span-warning">Forgot Password?</span>
          <Link to={"/register"} >
          <span className="span-green">New User?</span>
          </Link>
        </div>
        <div className="Boxer-button">
          <Button variant="contained" className="submit-button">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
