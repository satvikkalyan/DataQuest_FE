import React from "react";
import "./modifyJobs.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AdminTable from "../../components/tables/AdminTable";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function ModifyJobs() {
  const [payType, setPayType] = React.useState("Pay Type");

  const handleChange = (event) => {
    setPayType(event.target.value);
  };

  return (
    <>
      <div className="modify-container">
        <div className="modify-title">
          <h4>Modify/Add Jobs</h4>
          <p className="under-line"></p>
        </div>
        <div className="modify-container-top">
          <div className="modify-container-top-left">
            <div className="modify-container-top-left-0">
              <p className="skills-title">Job Details:</p>
            </div>
            <div className="modify-container-top-left-1">
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
                  multiline
                  rows={4}
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
                <FormControl variant="outlined" className="inputform">
                  <InputLabel id="pay-type">Pay Type</InputLabel>
                  <Select
                    id="demo-simple-select"
                    labelId="pay-type"
                    label="Pay Type"
                    value={payType}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Per Hour</MenuItem>
                    <MenuItem value={0}>Year</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Company"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Job Title"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Rating"
                  variant="outlined"
                />
              </div>
              <div className="Boxer plus-icon">
                <Button variant="contained" className="add-button">
                  Add Job
                </Button>
              </div>
            </div>
            <div className="modify-container-top-left-1">
              <div className="Boxer">
                <FormControl variant="outlined" className="inputform">
                  <InputLabel id="e-p-d">Employee Provided Data</InputLabel>
                  <Select
                    id="demo-simple-select-2"
                    labelId="e-p-d"
                    label="Employee Provided Data"
                    value={payType}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>True</MenuItem>
                    <MenuItem value={0}>False</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Lower Salary"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Upper Salary"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Average Salary"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Location"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Headquarters"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Size"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="founded in"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="modify-container-top-left-1">
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Ownership"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Industry"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Sector"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Revenue"
                  variant="outlined"
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Competitors"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Skills"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modify-container-bottom">
        <div className="table-container">
          <AdminTable />
        </div>
      </div>
    </>
  );
}

export default ModifyJobs;
