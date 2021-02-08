import React, { useState, useEffect } from 'react';
import Job from './Job';

const GitHubJobs = (props) => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log(props.geoLoc);
    if(props.geoLoc){
      getJobsList()
    }
  }, [props.geoLoc]);

  useEffect(() => {
    if(jobs.length > 0){
      displayJobs();
    }
    
  },[jobs])

  function getJobsList() {
    // let lat = props.geoLoc.latitude;
    // let lon = props.geoLoc.longitude;

    // console.log(props.geoLoc.latitude, props.geoLoc.longitude);

    let lat = 37;
    let lon = -122;
    
    let url = `https://efa-cors-anywhere.herokuapp.com/jobs.github.com/positions.json?lat=${lat}&long=${lon}`;

    fetch(url)
    .then((res) => {
        return(res.json());
      }
    )
    .then(json => {
      setJobs(json);
    })
  }

function displayJobs(){
  return (jobs.map((job, index) => {
    return (
      <Job key={job.id} job={job} index={index}/>
    )
  }))
}


  return ( 
    <>
      <h1>GitHub Jobs</h1>
      {jobs.length > 0
      ? displayJobs()
      : null
      } 
    </>
   );
}
 
export default GitHubJobs;