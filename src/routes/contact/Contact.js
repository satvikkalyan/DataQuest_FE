import React from "react";
import { TextField } from "@mui/material";
import "./contact.css";
import Button from "@mui/material/Button";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h4>Contact Us</h4>
        <p className="under-line"></p>
      </div>
      <div className="contact-content">
        <div className="contact-container-left">
          <div className="input-components">
            <div className="boxer">
              <TextField
                id="outlined-basic-1"
                label="Name"
                variant="outlined"
              />
            </div>
            <div className="boxer">
              <TextField
                id="outlined-basic-1"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="boxer">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <div className="boxer">
              <div className="boxer-button">
                <Button variant="contained" className="submit-button">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container-right"></div>
      </div>
    </div>
  );
}

export default Contact;
