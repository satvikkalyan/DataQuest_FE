import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./login.css";
import profileImg from "./../../resourses/profile-img.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useUpdateLoginDet } from "../../UserContext";
import { APIURL, userObjTemplate } from "../../constants";
import { getDataFromAPI } from "../../APICalls";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");
  const updateUserDetails = useUpdateLoginDet();
  const checkIfCorrectCred = (userDataObject) => {
    return (
      userDataObject?.passphrase === password &&
      (userDataObject?.isAdmin === 1 ? true : false) ===
        (admin === "True" ? true : false)
    );
  };

  const onLoginClicked = () => {
    getDataFromAPI(`${APIURL}/users/verify/${email}`).then(function (userData) {
      userData = userData[0];
      const userDataObject = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        gender: userData.gender,
        title: userData.title,
        company: userData.company,
        job_rating: userData.job_rating,
        passphrase: userData.passphrase,
        salary: userData.salary,
        salary_type: userData.salary_type,
        user_id: userData.user_id,
        isAdmin: userData.isAdmin,
      };

      if (checkIfCorrectCred(userDataObject)) {
        updateUserDetails(userDataObject);
        navigate("/home");
      } else {
        updateUserDetails(userObjTemplate);
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminChange = (e) => {
    setAdmin(e.target.value);
  };
  const handlePasswordChage = (e) => {
    setPassword(e.target.value);
  };

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
          <TextField
            id="outlined-basic-1"
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
          />
        </div>
        <div className="Boxer">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handlePasswordChage}
          />
        </div>
        <div className="Boxer">
          <FormControl variant="outlined" className="Boxer">
            <InputLabel id="gender-label">Admin</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              label="Admin"
              name="admin"
              value={admin}
              onChange={handleAdminChange}
            >
              <MenuItem value="True">Yes</MenuItem>
              <MenuItem value="False">No</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="Boxer">
          <span className="span-warning">Forgot Password?</span>
          <Link to={"/register"}>
            <span className="span-green">New User?</span>
          </Link>
        </div>
        <div className="Boxer">
          <Button
            variant="contained"
            className="submit-button"
            onClick={onLoginClicked}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
