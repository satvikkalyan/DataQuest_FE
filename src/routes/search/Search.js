import React, { useState } from "react";
import "./search.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CancelIcon from "@mui/icons-material/Cancel";
import BasicTable from "../../components/tables/TableComponent";
import { mockData } from "../../utils/mockData";

function Search() {
  const [skills, setSkills] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const values = [...skills];
    values[index].value = event.target.value;
    setSkills(values);
  };

  const handleAddFields = () => {
    const values = [...skills];
    values.push({ value: "" });
    setSkills(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...skills];
    values.splice(index, 1);
    setSkills(values);
  };

  const handleSearch = () => {
    // logic for searching using the values in the `skills` state array
    console.log(skills);
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
          <div className="search-container-top-right">
            {skills.map((skill, index) => (
              <div key={index} className="Boxer">
                <TextField
                  id={`skill-${index}`}
                  label="Enter your Skill Here"
                  variant="outlined"
                  value={skill.value}
                  onChange={(event) => handleChange(index, event)}
                />
                <CancelIcon onClick={() => handleRemoveFields(index)} />
              </div>
            ))}
            <div className="Boxer plus-icon">
              <ControlPointIcon onClick={handleAddFields} />
            </div>
            <div className="Boxer plus-icon">
              <Button variant="contained" className="Search-button" onClick={handleSearch} disabled={skills.length===0}>
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="search-container-bottom">
          <div className="table-container">
            <BasicTable row={mockData} length={5}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
