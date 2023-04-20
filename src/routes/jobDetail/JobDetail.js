import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./jobDetail.css"
function JobDetail() {
    const location = useLocation();
    const { id, name, calories, fat, carbs, protein } = location.state; 
  return (
    <div className='job-details-container'>
      <p>Job Details for ID: {id}</p>
      <p>Name: {name}</p>
      <p>Calories: {calories}</p>
      <p>Fat: {fat}</p>
    </div>
  );
}

export default JobDetail;
