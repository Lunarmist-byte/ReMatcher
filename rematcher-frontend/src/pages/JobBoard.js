import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='container mt-4'>
      <h3>Job Listings</h3>
      <ul className='list-group'>
        {jobs.map((job, index) => (
          <li className="list-group-item" key={index}>
            <h5>{job.title} @ {job.company}</h5>
            <p>{job.description}</p>
            <strong>Skills:</strong> {job.skills.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobBoard;
