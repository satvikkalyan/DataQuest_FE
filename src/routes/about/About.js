import React from "react";
import "./about.css"

function About() {
const title_1 = "What do we do:";
const description_1 = "DataQuest is a user-friendly job search platform that helps job seekers find relevant job opportunities based on their skillset. Our platform is designed to provide job seekers with the information and tools they need to succeed in today's competitive job market.\n\nAt DataQuest, our mission is to connect job seekers with their dream job by leveraging the power of technology and data analysis. We believe that finding a job should be a stress-free experience, and our platform is designed to make it easy for job seekers to find job opportunities that match their skills and preferences.\n\nOur team consists of experienced professionals in the fields of data analysis and software development. We are passionate about helping job seekers achieve their career goals, and we strive to provide the highest level of service to our users.\n\nOur platform matches job seekers with relevant job openings, even if they are missing some of the required skills. We provide job seekers with a comprehensive list of additional skills that they need to learn in order to qualify for the job.";

const title_2 = "How DataQuest works:";
const description_2 = "In addition to our job matching capabilities, DataQuest also provides valuable insights into the job market through user-friendly charts and graphs. By presenting the most up-to-date job market data, job seekers can make informed decisions about their career path and identify potential growth areas.\n\nAt DataQuest, we are committed to helping job seekers find their dream job and achieve their career goals. We invite you to join our platform and take the first step towards your future success.";

return (
<div className="about-container">
<div className="about-title">
<h4>About Us</h4>
<p className="under-line"></p>
</div>
<div className="about-content">
<div className="about-container-left">
<div className="about-content-title content-sepatator">{title_1}</div>
<div className="about-content-description content-sepatator">
{description_1}
</div>
<div className="about-content-title content-sepatator">{title_2}</div>
<div className="about-content-description content-sepatator">
{description_2}
</div>
</div>
</div>
</div>
);
}

export default About;