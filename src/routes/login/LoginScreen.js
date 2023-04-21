import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./login.css";
import profileImg from "./../../resourses/profile-img.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {  useUpdateLoginDet } from "../../UserContext";
import { APIURL, userObjTemplate } from "../../constants";
import { getDataFromAPI } from "../../APICalls";
import { useNavigate } from "react-router-dom";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userObj, setUserObj] = useState();
  const updateUserDetails = useUpdateLoginDet();
  const checkIfCorrectCred = () => {
    return userObj.passphrase === password;
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
      };

      if (checkIfCorrectCred) {
        setUserObj(userDataObject);
        updateUserDetails(userDataObject);
        navigate("/home")
      } else {
        setUserObj(userObjTemplate);
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
          <span className="span-warning">Forgot Password?</span>
          <Link to={"/register"}>
            <span className="span-green">New User?</span>
          </Link>
        </div>
        <div className="Boxer-button">
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
