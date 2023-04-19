import React from "react";
import "./jobList.css";
import UserViewTable from "../../components/tables/UserViewTable";

function JobList() {
  return (
    <>
      <div className="search-container">
        <div className="search-title">
          <h4>Jobs</h4>
          <p className="under-line"></p>
        </div>
        <div className="search-container-top">
          <div className="table-container">
            <UserViewTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
