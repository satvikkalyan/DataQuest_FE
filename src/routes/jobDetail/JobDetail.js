import React from "react";
import Typography from "@mui/material/Typography";
import { mockJobData } from "./mockJobData";
import "./jobDetail.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function JobDetail() {
  const navigate = useNavigate()
  const jobDetails = mockJobData;
  return (
    <>
      <div className="jobdetails-title">
        <h4>Job Details</h4>
        <p className="under-line"></p>
      </div>
      <div className="job-details-container">
        <div className="job-details-container-left">
          <div className="job-details-container-left-one"></div>
        </div>
        <div className="job-details-container-right">
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Job ID</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.jobId}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Job Title</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.jobTitle}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Job Description</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.jobDescription}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Pay Range</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.lowerSalary} - {jobDetails.upperSalary} (
                {jobDetails.hourly ? "Hourly" : "Annualy"}){" "}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Average Pay</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.avgSalary} (
                {jobDetails.hourly ? "Hourly" : "Annualy"})
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Name</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.company.companyName}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Rating</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.company.rating}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Location</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.company.location}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company headquarters</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.company.headquarters}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Size</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.company.size}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Founded In</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.company.founded}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company Type</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.company.typeOfOwnership}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company industry</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">
                {jobDetails.company.industry}
              </Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company sector</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.company.sector}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company revenue</Typography>
            </div>
            <div className="job-det-details">
              <Typography variant="h6">{jobDetails.company.revenue}</Typography>
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Company competitors</Typography>
            </div>
            <div className="job-det-details">
              {jobDetails.company.competitors.map((item) => {
                return (
                  <Typography variant="h6">{item.competitorName}</Typography>
                );
              })}
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label">
              <Typography variant="h6">Primary Skills Required</Typography>
            </div>
            <div className="job-det-details">
              {jobDetails.skills.map((item) => {
                return <Typography variant="h6">{item.skill}</Typography>;
              })}
            </div>
          </div>
          <div className="job-det-row">
            <div className="job-det-label"></div>
            <div className="job-det-details">
              <div className="button-container">
                <Button variant="contained" className="back-button" onClick={()=>navigate("/jobs")}>
                  back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetail;
