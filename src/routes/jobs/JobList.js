import React, { useEffect, useState } from "react";
import "./jobList.css";
import BasicTable from "../../components/tables/TableComponent";
import { getDataFromAPI } from "../../APICalls";
import { APIURL } from "../../constants";
import CircularLoading from "../../utils/CircularLoading";

function JobList() {
  const [jobsData, setJobsData] = useState(undefined);
  const [isLoading, setLoadingFlag] = useState(true);

  useEffect(() => {
    getDataFromAPI(`${APIURL}/allJobs`).then((data) => {
      setJobsData(data);
      setLoadingFlag(false)
    }).catch((err) => {
      console.error(err);
      setLoadingFlag(false);
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
          {<CircularLoading isLoading={isLoading} />}
            {jobsData?.length>0 && <BasicTable rows={jobsData} length={25} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
