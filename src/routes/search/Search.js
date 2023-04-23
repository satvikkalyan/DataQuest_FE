import React, { useState } from "react";
import "./search.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CancelIcon from "@mui/icons-material/Cancel";
import BasicTable from "../../components/tables/TableComponent";
import { postDataToAPI } from "../../APICalls";
import { APIURL } from "../../constants";
import CircularLoading from "../../utils/CircularLoading";
function Search() {
  const [skills, setSkills] = useState([""]);
  const [jobsData, setJobsData] = useState(undefined);
  const [isLoading, setLoadingFlag] = useState(false);

  const handleChange = (index, event) => {
    const values = [...skills];
    values[index] = event.target.value;
    setSkills(values);
  };

  const handleAddFields = () => {
    const values = [...skills];
    values.push("");
    setSkills(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...skills];
    values.splice(index, 1);
    setSkills(values);
  };

  const handleSearch = () => {
    const skillsArray = { skills: skills };
    setLoadingFlag(true);
    postDataToAPI(`${APIURL}/jobs`, skillsArray)
      .then((data) => {
        setJobsData(data);
        setLoadingFlag(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingFlag(false);
      });
  };

  return (
    <>
      <div className="search-container">
        <div className="search-title">
          <h4>Search Jobs</h4>
          <p className="under-line"></p>
        </div>
        <div className="search-container-top">
          <div className="search-container-top-left">
            <p className="skills-title">Skills:</p>
          </div>
          {<CircularLoading isLoading={isLoading} />}
          <div className="search-container-top-right">
            {skills.map((skill, index) => (
              <div key={index} className="boxer">
                <TextField
                  id={`skill-${index}`}
                  label="Enter your Skill Here"
                  variant="outlined"
                  value={skill}
                  onChange={(event) => handleChange(index, event)}
                />
                <div className="cancel-icon">
                  <CancelIcon onClick={() => handleRemoveFields(index)} />
                </div>
              </div>
            ))}

            <div className="boxer plus-icon">
              <ControlPointIcon onClick={handleAddFields} />
            </div>
            <div className="boxer plus-icon">
              <Button
                variant="contained"
                className="Search-button"
                onClick={handleSearch}
                disabled={skills.length === 0}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="search-container-bottom">
          <div className="table-container">
            {jobsData && (
              <BasicTable rows={jobsData} length={5} searchFlag={true} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
