import React, { useState } from "react";
import profileImg from "./../../resourses/profile-img.png";
import { Button } from "@mui/material";
import "./profile.css";
import { TextField } from "@mui/material";
import Rating from "@mui/material/Rating";

function Profile() {
  const [value, setValue] = useState(3.5);
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
                variant="outlined"
              />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </div>{" "}
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
              />
            </div>
            <div className="bi-element">
              <TextField id="outlined-basic" label="Email" variant="outlined" />
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
                id="outlined-basic"
                label="Company"
                variant="outlined"
              />
            </div>
            <div className="bi-element">
              <TextField id="outlined-basic" label="Title" variant="outlined" />
            </div>
            <div className="bi-element">
              <TextField
                id="outlined-basic"
                label="Salary"
                variant="outlined"
              />
            </div>

            <div className="bi-element">
            <TextField
                id="outlined-multiline-static"
                label="Skills"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>

          </div>
          <div className="professional-details-title">
            <p>Job Rating</p>
          </div>
          <div className="professional-information">
            <div className="bi-element-2">
              <Rating
                name="simple-controlled"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
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
