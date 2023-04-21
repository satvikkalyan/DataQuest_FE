import React from "react";
import "./jobList.css";
import BasicTable from "../../components/tables/TableComponent";
import { mockData } from "../../utils/mockData";
// import UserViewTable from "../../components/tables/UserViewTable";

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
            {/* <UserViewTable /> */}
            <BasicTable row={mockData} length={20}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
