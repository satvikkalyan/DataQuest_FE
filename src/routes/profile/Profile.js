import React, { useState } from "react";
import profileImg from "./../../resourses/profile-img.png";
import { Button } from "@mui/material";
import "./profile.css";
import { TextField } from "@mui/material";
import { useLoginDet, useUpdateLoginDet } from "../../UserContext";
import { APIURL, userObjTemplate } from "../../constants";
import { postDataToAPI } from "../../APICalls";

import Rating from "@mui/material/Rating";

function Profile() {
  const updateUserDetails = useUpdateLoginDet();
  const userDetails = useLoginDet();
  const [skills, setSkills] = useState([]);
  const handleChange = (event) => {
    setSkills(event.target.value);
  };
  const [formValues, setFormValues] = useState({
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    passphrase: userDetails.passphrase,
    gender: userDetails.gender,
    title: userDetails.title,
    company: userDetails.company,
    job_rating: userDetails.job_rating,
    salary: userDetails.salary,
    salary_type: userDetails.salary_type,
    user_id: userDetails.user_id,
    isAdmin: userDetails.isAdmin,
  });

  const onFormValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-title">
        <h4>My Profile</h4>
        <p className="under-line"></p>
      </div>
      <div className="profile-content">
        <div className="profile-container-left">
          <div className="user-profile-picture">
            <img
              src={profileImg}
              alt="profile"
              style={{ width: "350px", height: "200px" }}
            />
          </div>
          <div className="Boxer-button">
            <Button variant="contained" className="upload-button">
              Upload
            </Button>
          </div>
          <div className="basic-information-title">
            <p>Basic Information</p>
          </div>
          <div className="basic-information">
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="First Name"
                name="firstName"
                value={formValues.firstName ? formValues.firstName : ""}
                variant="outlined"
                onChange={onFormValueChange}
              />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formValues.lastName ? formValues.lastName : ""}
                onChange={onFormValueChange}
              />
            </div>{" "}
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Gender"
                name="gender"
                value={formValues.gender ? formValues.gender : ""}
                variant="outlined"
                onChange={onFormValueChange}
                disabled
              />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={formValues.email ? formValues.email : ""}
                onChange={onFormValueChange}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="profile-container-right">
          <div className="professional-details-title">
            <p>Profession Details</p>
          </div>

          <div className="professional-information">
            <div className="bi-element">
              <TextField
                name="company"
                value={formValues.company ? formValues.company : ""}
                id="outlined-basic"
                label="Company"
                variant="outlined"
                onChange={onFormValueChange}
              />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={formValues.title ? formValues.title : ""}
                onChange={onFormValueChange}
              />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                name="salary"
                value={formValues.salary ? formValues.salary : ""}
                label="Salary"
                variant="outlined"
                onChange={onFormValueChange}
              />
            </div>

            <div className="bi-element">
              <TextField
                id="outlined-multiline-static"
                name="skills"
                value={skills}
                label="Skills"
                multiline
                rows={4}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="professional-details-title">
            <p>Job Rating</p>
          </div>
          <div className="professional-information">
            <div className="bi-element-2">
              <Rating
                name="job_rating"
                value={formValues.job_rating ? formValues.job_rating : 0}
                precision={0.5}
                onChange={onFormValueChange}
              />
            </div>
          </div>

          <div className="save-button">
            <Button variant="contained" className="upload-button">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
