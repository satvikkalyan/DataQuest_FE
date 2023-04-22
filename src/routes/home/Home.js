import React from "react";
import "./home.css";
function Home() {
  const title_1 = "Welcome to DataQuest:";
  const description_1 =
    "DataQuest is an intuitive job search platform designed to assist job seekers in finding job opportunities that match their skillset. It identifies relevant job openings that are suitable for job seekers based on their current skills. Even if a job seeker lacks some of the required skills, DataQuest provides a comprehensive list of additional skills that need to be learned in order to qualify for the job.";
  const description_1_2 =
    "In addition to its advanced job matching capabilities, DataQuest also provides valuable insights into the job market through user-friendly charts and graphs. By presenting the most up-to-date job market data, job seekers can make informed decisions about their career path and identify potential growth areas. With its user-friendly interface and comprehensive data analysis, DataQuest is the ultimate job search tool for the modern job seeker.";
  const title_2 = "How to Use DataQuest:";
  return (
    <div className="home-container">
      <div className="home-title">
        <h4>DataQuest</h4>
        <p className="under-line"></p>
      </div>
      <div className="home-content">
        <div className="home-container-left">
          <div className="home-content-title content-sepatator">{title_1}</div>
          <div className="home-content-description content-sepatator">
            {description_1}
            <br /> <br />
            {description_1_2}
          </div>
          <div className="home-content-title content-sepatator">{title_2}</div>
          <div className="home-content-description content-sepatator">
            <div className="padder">
              <ol>
                <li>
                  Create an account using the registration page by providing all
                  the required details.
                </li>
                <li>Login to your account.</li>
                <li>
                  Use the search feature to find job openings that match your
                  skills.
                </li>
                <li>
                  If you are missing some of the required skills for a
                  particular job, DataQuest will provide you with a list of
                  additional skills that you need to learn.
                </li>
                <li>
                  Use DataQuest charts and graphs to stay up-to-date on job
                  market trends and make informed decisions about your career
                  path.
                </li>
              </ol>
              <br></br>
              <p>
                By following these steps, you can use DataQuest to find job
                opportunities that match your skills and make informed decisions
                about your career path.
              </p>
            </div>
          </div>
        </div>
        <div className="home-container-right"></div>
      </div>
    </div>
  );
}

export default Home;
