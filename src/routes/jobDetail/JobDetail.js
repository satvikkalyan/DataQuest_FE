import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams(); // get the job ID from the route

  // fetch the job details using the ID and display them
  return (
    <div>
      <h1>Job Details for ID: {id}</h1>
      {/* display the job details */}
      {/* ... */}
    </div>
  );
}

export default JobDetail;
