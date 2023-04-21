import React, { useState } from "react";
import "./search.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BasicTable from "../../components/tables/TableComponent"

function Search() {
  const [numSkills, setNumSkills] = useState(2); // initial number of text fields

  const addSkill = () => {
    setNumSkills(numSkills + 1); // add one to the number of text fields
  };

  const skills = [];
  for (let i = 1; i <= numSkills; i++) {
    skills.push(
      <div className="Boxer" key={i}>
        <TextField
          id={`outlined-basic-${i}`}
          label="Enter your Skill Here"
          variant="outlined"
        />
      </div>
    );
  }

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
            {skills}
            <div className="Boxer plus-icon" onClick={addSkill}>
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

export default Search;
