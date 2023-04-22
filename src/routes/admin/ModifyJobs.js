import React, { useState, useEffect } from "react";
import "./modifyJobs.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AdminTable from "../../components/tables/AdminTable";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { mockData } from "../../utils/mockData";
function ModifyJobs() {
  const [rows, setRows] = useState(mockData);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleEdit = (job) => {
    console.log(job);
    setSelectedJob(job);
  };

  const [formValues, setFormValues] = React.useState({
    jobName: "",
    jobDescription: "",
    salary: "",
    payType: "",
    company: "",
    jobTitle: "",
    rating: "",
    employeeProvidedData: "",
    lowerSalary: "",
    upperSalary: "",
    averageSalary: "",
    location: "",
    headquarters: "",
    size: "",
    foundedIn: "",
    ownership: "",
    industry: "",
    sector: "",
    revenue: "",
    competitors: "",
    skills: "",
  });

  useEffect(() => {
    if (selectedJob) {
      setFormValues(selectedJob);
    }
  }, [selectedJob]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.jobId !== id);
    setRows(updatedRows);
  };

  const handleAddJob = () => {
    if (selectedJob) {
      const updatedJob = { ...selectedJob, ...formValues };
      console.log(updatedJob);
      // update the selected job in the mockData array
    } else {
      const newJob = { id: "23", ...formValues };
      // add the new job to the mockData array
      console.log(newJob);
    }
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
                  name="jobName"
                  value={formValues.jobName}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Job Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="jobDescription"
                  value={formValues.jobDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Salary"
                  variant="outlined"
                  name="salary"
                  value={formValues.salary}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <FormControl variant="outlined" className="inputform">
                  <InputLabel id="pay-type">Pay Type</InputLabel>
                  <Select
                    id="demo-simple-select"
                    labelId="pay-type"
                    label="Pay Type"
                    name="payType"
                    value={formValues.payType}
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
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Job Title"
                  variant="outlined"
                  name="jobTitle"
                  value={formValues.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Rating"
                  variant="outlined"
                  name="rating"
                  value={formValues.rating}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer plus-icon">
                <Button
                  variant="contained"
                  className="add-button"
                  onClick={handleAddJob}
                >
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
                    name="employeeProvidedData"
                    value={formValues.employeeProvidedData}
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
                  name="lowerSalary"
                  value={formValues.lowerSalary}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Upper Salary"
                  variant="outlined"
                  name="upperSalary"
                  value={formValues.upperSalary}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Average Salary"
                  variant="outlined"
                  name="averageSalary"
                  value={formValues.averageSalary}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Location"
                  variant="outlined"
                  name="location"
                  value={formValues.location}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Headquarters"
                  variant="outlined"
                  name="headquarters"
                  value={formValues.headquarters}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Size"
                  variant="outlined"
                  name="size"
                  value={formValues.size}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="founded in"
                  variant="outlined"
                  name="foundedIn"
                  value={formValues.foundedIn}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modify-container-top-left-1">
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Ownership"
                  variant="outlined"
                  name="ownership"
                  value={formValues.ownership}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Industry"
                  variant="outlined"
                  name="industry"
                  value={formValues.industry}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Sector"
                  variant="outlined"
                  name="sector"
                  value={formValues.sector}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Revenue"
                  variant="outlined"
                  name="revenue"
                  value={formValues.revenue}
                  onChange={handleChange}
                />
              </div>
              <div className="Boxer">
                <TextField
                  id="outlined-basic-1"
                  label="Competitors"
                  variant="outlined"
                  name="competitors"
                  value={formValues.competitors}
                  onChange={handleChange}
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
                  name="skills"
                  value={formValues.skills}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modify-container-bottom">
        <div className="table-container">
          <AdminTable
            rows={rows}
            onEdit={handleEdit}
            onRowDelete={handleDeleteRow}
          />
        </div>
      </div>
    </>
  );
}

export default ModifyJobs;
