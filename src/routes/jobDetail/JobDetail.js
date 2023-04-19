import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function JobDetail() {
    const location = useLocation();
    const { id, name, calories, fat, carbs, protein } = location.state; // get the job data from the state

  // fetch the job details using the ID and display them
  return (
    <div>
      <h1>Job Details for ID: {id}</h1>
      <p>Name: {name}</p>
      <p>Calories: {calories}</p>
      <p>Fat: {fat}</p>
    </div>
  );
}

export default JobDetail;
