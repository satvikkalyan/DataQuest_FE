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
import CircularLoading from "../../utils/CircularLoading";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");
  const updateUserDetails = useUpdateLoginDet();
  const [isLoading, setLoadingFlag] = useState(false);
  const checkIfCorrectCred = (userDataObject) => {
    return (
      userDataObject?.passphrase === password &&
      (userDataObject?.isAdmin === 1 ? true : false) ===
        (admin === "True" ? true : false)
    );
  };

  const onLoginClicked = () => {
    setLoadingFlag(true);
    getDataFromAPI(`${APIURL}/users/verify/${email}`)
      .then(function (userData) {
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
          setLoadingFlag(false);
          updateUserDetails(userDataObject);
          navigate("/home");
        } else {
          setLoadingFlag(false);
          window.alert("Incorrect Credentials");
          updateUserDetails(userObjTemplate);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoadingFlag(false);
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
      <div className="login-content">
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
        {<CircularLoading isLoading={isLoading} />}
        <div className="boxer">
          <TextField
            id="outlined-basic-1"
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
          />
        </div>
        <div className="boxer">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handlePasswordChage}
          />
        </div>
        <div className="boxer">
          <FormControl variant="outlined" className="input-form">
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
        <div className="boxer-left-align">
          <span className="span-warning">Forgot Password?</span>
          <Link to={"/register"}>
            <span className="span-green">New User?</span>
          </Link>
        </div>
        <div className="boxer">
          <div className="boxer-button">
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
    </div>
  );
}

export default LoginScreen;
