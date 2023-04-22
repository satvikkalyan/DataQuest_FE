import React, { useEffect, useState } from "react";
import "./jobList.css";
import BasicTable from "../../components/tables/TableComponent";
import { getDataFromAPI } from "../../APICalls";
import { APIURL } from "../../constants";

function JobList() {
  const [jobsData, setJobsData] = useState(undefined);
  useEffect(() => {
    getDataFromAPI(`${APIURL}/allJobs`).then((data) => {
      setJobsData(data);
    });
  }, []);
  return (
    <>
      <div className="search-container">
        <div className="search-title">
          <h4>Jobs</h4>
          <p className="under-line"></p>
        </div>
        <div className="search-container-top">
          <div className="table-container">
            {jobsData && <BasicTable rows={jobsData} length={25} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
