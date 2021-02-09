import React, { useState, useEffect } from 'react';
import { Col, FormGroup, Row, Table, Form, Label, Input } from 'reactstrap';
import Job from './Job';

const GitHubJobs = (props) => {

  const [jobs, setJobs] = useState([]);
  const [isLocal, setIsLocal] = useState(true);

  useEffect(() => {
    console.log(props.geoLoc);
    if(props.geoLoc){
      getJobsList()
    }
  }, [props.geoLoc, isLocal]);

  useEffect(() => {
    if(jobs.length > 0){
      displayJobs();
    }
    
  },[jobs])

  function getJobsList() {
    let lat = props.geoLoc.latitude;
    let lon = props.geoLoc.longitude;

    // console.log(props.geoLoc.latitude, props.geoLoc.longitude);
    console.log(isLocal);
    // let lat = 37;
    // let lon = -122;

    let location = (isLocal) ? `lat=${lat}&long=${lon}` : ''
    
    let url = `https://efa-cors-anywhere.herokuapp.com/jobs.github.com/positions.json?${location}`;

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

  let headingStyle = 
    {
      textAlign:"left",
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      fontWeight: 'bold',
      margin: '20px'
    }
  return ( 
    <>
    <Row>
      <Col> 
        <h1 style={headingStyle}>GitHub Jobs</h1>
      </Col>
    </Row> 
    <Row> 
      <Form className='form_row' >
        <FormGroup check>
          <Label check>
            <Input type="radio" name='job-radio' onChange={()=>{setIsLocal(true)}}/> Local Jobs
          </Label>
        </FormGroup>
        <FormGroup check id='all-jobs'>
          <Label check>
            <Input type="radio" name='job-radio' onChange={()=>{setIsLocal(false)}}/> All Jobs
          </Label>
        </FormGroup>
      </Form> 
    </Row>
    <Row> 
      <Col> 
        <Table striped>
          <thead>
          </thead>
            <tbody>
              {jobs.length > 0 ? displayJobs(): null} 
            </tbody>
        </Table>
      </Col>
    </Row>


    </>
   );
}
 
export default GitHubJobs;