import React from "react";
import "./modifyJobs.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BasicTable from "../../components/TableComponent";
function ModifyJobs() {
  return (
    <>
      <div className="search-container">
        <div className="search-title">
          <h4>Modify/Add Jobs</h4>
          <p className="under-line"></p>
        </div>
        <div className="search-container-top">
          <div className="search-container-top-left">
            <p className="skills-title">Job Details:</p>
          </div>
          <div className="search-container-top-right">
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job ID"
                variant="outlined"
              />
            </div>
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job Name"
                variant="outlined"
              />
            </div>
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job Name"
                variant="outlined"
              />
            </div>
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job Name"
                variant="outlined"
              />
            </div>
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job Name"
                variant="outlined"
              />
            </div>
            <div className="Boxer">
              <TextField
                id="outlined-basic-1"
                label="Job Name"
                variant="outlined"
              />
            </div>
            <div className="Boxer plus-icon">
              <ControlPointIcon />
            </div>
            <div className="Boxer plus-icon">
              <Button variant="contained" className="Search-button">
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="search-container-bottom">
          <div className="table-container">
            <BasicTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifyJobs;
