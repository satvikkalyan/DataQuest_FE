import React, { useState } from "react";
import "./charts.css";
import BarChartComponent from "./BarChart";
import { Button } from "@mui/material";
function Charts() {
  const annualData = [
    { name: "Information Technology", avg_sal: 80000 },
    { name: "Healthcare", avg_sal: 60000 },
    { name: "Finance", avg_sal: 70000 },
    { name: "Marketing", avg_sal: 55000 },
    { name: "Education", avg_sal: 50000 },
    { name: "Manufacturing", avg_sal: 65000 },
    { name: "Retail", avg_sal: 45000 },
    { name: "Hospitality", avg_sal: 40000 },
    { name: "Legal", avg_sal: 90000 },
    { name: "Construction", avg_sal: 55000 },
  ];
  const [chartType, setChartType] = useState("Annual");
  const hourlyData = [
    { job_title: "Software Engineer", hourly_pay: 50.0 },
    { job_title: "Data Analyst", hourly_pay: 35.5 },
    { job_title: "Customer Service Representative", hourly_pay: 15.0 },
    { job_title: "Graphic Designer", hourly_pay: 25.0 },
  ];
  const handleChange = (event) => {
    if (event.target.innerText === "HOURLY") {
      setChartType("HOURLY");
    } else {
      setChartType("ANNUAL");
    }
  };
  return (
    <div className="charts-container">
      <div className="charts-title">
        <h4>Job Market Insights</h4>
        <p className="under-line"></p>
      </div>
      <div className="charts-sub-title">
        <h4>Average Annual or Hourly Pay by Industry</h4>
      </div>
      <div className="charts-content">
        <div className="chart-row">
          {chartType === "ANNUAL" ? (
            <BarChartComponent
              data={annualData}
              x_axis={"name"}
              y_axis={"avg_sal"}
            />
          ) : (
            <BarChartComponent
              data={hourlyData}
              x_axis={"job_title"}
              y_axis={"hourly_pay"}
            />
          )}
        </div>
        <div className="chart-row">
          <div className="buttons">
            <div className="button-container">
              <Button
                variant="contained"
                className="annual-button"
                onClick={handleChange}
              >
                Annual
              </Button>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                className="hourly-button"
                onClick={handleChange}
              >
                Hourly
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="charts-sub-title">
        <h4>Number of Job Openings By Industry</h4>
      </div>
      <div className="charts-content">
        <div className="chart-row">
          <BarChartComponent
            data={annualData}
            x_axis={"name"}
            y_axis={"avg_sal"}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
