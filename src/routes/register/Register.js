import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./register.css";
import profileImg from "./../../resourses/profile-img.png";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useUpdateLoginDet } from "./../../UserContext";
import { APIURL, userObjTemplate } from "../../constants";
import { postDataToAPI } from "../../APICalls";
function Register() {
  const navigate = useNavigate();
  const updateUserDetails = useUpdateLoginDet();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const onFormValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmitClicked = () => {
    if (formValues.password === formValues.confirmPassword) {
      const newUserDetails = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        passphrase: formValues.password,
        gender: formValues.gender,
      };
      postDataToAPI(`${APIURL}/users`, newUserDetails).then((res) => {
        if (res > 0) {
          const updatedUserDetails = { ...userObjTemplate, ...newUserDetails };
          updatedUserDetails.user_id = res;
          updateUserDetails(updatedUserDetails);
          navigate("/home");
        } else {
          window.alert("Error Creating user");
        }
      });
    } else {
      window.alert("Passwords doesnt match");
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h4>Register</h4>
      </div>
      <div className="login-picture">
        <img
          src={profileImg}
          alt="profile"
          style={{ width: "190px", height: "100px" }}
        />
      </div>
      <div className="login-content">
        <div className="boxer">
          <TextField
            id="firstName-field"
            name="firstName"
            label="First Name"
            variant="outlined"
            onChange={onFormValueChange}
            value={formValues.firstName}
          />
        </div>
        <div className="boxer">
          <TextField
            id="lastName-field"
            label="Last Name"
            name="lastName"
            variant="outlined"
            onChange={onFormValueChange}
            value={formValues.lastName}
          />
        </div>
        <div className="boxer">
          <TextField
            id="email-field"
            label="Email"
            name="email"
            variant="outlined"
            value={formValues.email}
            onChange={onFormValueChange}
          />
        </div>
        <div className="boxer ">
          <FormControl variant="outlined" className="input-form">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              label="Gender"
              name="gender"
              value={formValues.gender}
              onChange={onFormValueChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="boxer">
          <TextField
            id="password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={onFormValueChange}
          />
        </div>
        <div className="boxer">
          <TextField
            id="confirm-password-input"
            label="Comfirm Password"
            type="password"
            name="confirmPassword"
            autoComplete="current-password"
            value={formValues.confirmPassword}
            onChange={onFormValueChange}
          />
        </div>
        <div className="boxer">
          <div className="boxer-link">
            <Link to={"/login"}>
              <span className="span-green">Existing User?</span>
            </Link>
          </div>
        </div>
        <div className="boxer">
          <div className="boxer-button">
            <Button
              variant="contained"
              className="submit-button"
              onClick={onSubmitClicked}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
