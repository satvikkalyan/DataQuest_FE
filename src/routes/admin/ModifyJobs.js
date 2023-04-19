import React from "react";
import "./modifyJobs.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AdminTable from "../../components/tables/AdminTable";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ModifyJobs() {
  const [payType, setPayType] = React.useState("Pay Type");

  const handleChange = (event) => {
    setPayType(event.target.value);
  };

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
            <div className="buttons-container">
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
                  label="Job Description"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Salary"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <Select
                  id="demo-simple-select"
                  value={payType}
                  label="Sassd"
                  onChange={handleChange}
                  sx={{ minWidth: "100%" }}
                >
                  <MenuItem value={1}>Per Hour</MenuItem>
                  <MenuItem value={0}>Year</MenuItem>
                </Select>
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Company"
                  variant="outlined"
                />
              </div>
              <div className="Boxer plus-icon">
                <Button variant="contained" className="add-button">
                  Add Job
                </Button>
              </div>
            </div>
          </div>
          <div className="search-container-top-right"></div>
        </div>
        <div className="search-container-bottom">
          <div className="table-container">
            <AdminTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModifyJobs;
