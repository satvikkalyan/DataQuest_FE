import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./contact.css";
import Button from "@mui/material/Button";
import { postDataToAPI } from "../../APICalls";
import { APIURL } from "../../constants";
import CircularLoading from "../../utils/CircularLoading";
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [emailSentFlag, setEmailSetFlag] = useState(false);
  const [isLoading, setLoadingFlag] = useState(false);
  const handleOnSubmitEmail = () => {
    setLoadingFlag(true);
    const data = { name: name, email: email, description: desc };
    postDataToAPI(`${APIURL}/send-email`, data)
      .then((data) => {
        setEmailSetFlag(true);
        setLoadingFlag(false);
        setEmail("");
        setName("");
        setDesc("");
      })
      .catch((err) => {
        console.error(err);
        setLoadingFlag(false);
      });
  };
  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setEmail(value);
  };
  const handleNameChange = (event) => {
    const { name, value } = event.target;
    console.log(name);

    setName(value);
  };
  const handleDescChange = (event) => {
    const { name, value } = event.target;
    console.log(name);

    setDesc(value);
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h4>Contact Us</h4>
        <p className="under-line"></p>
      </div>
      <div className="contact-content">
        <div className="contact-container-left">
          <div className="input-components">
            {<CircularLoading isLoading={isLoading} />}
            <div className="boxer">
              <TextField
                id="outlined-basic-1"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="boxer">
              <TextField
                id="outlined-basic-1"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="boxer">
              <TextField
                id="outlined-multiline-static"
                onChange={handleDescChange}
                label="Description"
                multiline
                rows={4}
                value={desc}
              />
            </div>
            {emailSentFlag && (
              <div className="boxer">
                <p>Email Send Successfully!</p>
              </div>
            )}
            <div className="boxer">
              <div className="boxer-button">
                <Button
                  variant="contained"
                  className="submit-button"
                  onClick={handleOnSubmitEmail}
                >
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
