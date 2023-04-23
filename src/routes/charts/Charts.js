import React, { useEffect, useState } from "react";
import "./charts.css";
import BarChartComponent from "./BarChart";
import { Button } from "@mui/material";
import { getDataFromAPI } from "../../APICalls";
import { APIURL } from "../../constants";
import CircularLoading from "../../utils/CircularLoading";

function Charts() {
  const [annualData,setAnnualData] = useState([])
  const [hourlyData,setHourlyData] = useState([])
  const [Openings,setOpenings] = useState([])
  const [isLoading, setLoadingFlag] = useState(true);

  const [chartType, setChartType] = useState("Annual");
  useEffect(()=>{
    getDataFromAPI(`${APIURL}/charts`).then((data)=>{
      setAnnualData(data?.avgAnnuallyPayByIndustry)
      setHourlyData(data?.avgHourlyPayByIndustry)
      setOpenings(data?.numOfJobOpeningsByIndustry)
      setLoadingFlag(false)
    }).catch((err) => {
      console.error(err);
      setLoadingFlag(false);
    });
  },[])



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
      {<CircularLoading isLoading={isLoading} />}

      <div className="charts-sub-title">
        <h4>Average Annual or Hourly Pay by Industry</h4>
      </div>
      <div className="charts-content">
        <div className="chart-row">
          {chartType === "ANNUAL" ? (
            <BarChartComponent
              data={annualData}
              x_axis={"Industry"}
              y_axis={"AvgAnnuallyPay"}
            />
          ) : (
            <BarChartComponent
              data={hourlyData}
              x_axis={"Industry"}
              y_axis={"AvgHourlyPay"}
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
            data={Openings}
            x_axis={"Industry"}
            y_axis={"NumOfJobOpenings"}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
