import React, { useEffect, useState } from 'react';
import {render} from 'react-dom'
import Weather from './components/Weather'
import NASA from './components/NASA';
import GitHubJobs from './components/GitHubJobs';
import Restaurant from './components/Restaurant';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import './index.js';




function App() {

  const [geoLoc, setGeoLoc] = useState();

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(setLoc);
  }, []);


  const setLoc = (position) => {
    setGeoLoc({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

    console.log(position.coords.latitude, position.coords.longitude);
  }

  return (

    <div className="main_body">

      <Card body inverse style={{ backgroundColor: '#E9E9E9', borderColor: '#333' }}className="text-center">
        <CardTitle inverse style={{ color: "#333" }} tag="h1"><u>BASED ON YOUR LOCATION</u></CardTitle>
        <br/>
        <br/>
        <CardSubtitle inverse style={{ color: "#333" }} tag="h2">Job Listings:</CardSubtitle>
        <CardBody inverse style={{ color: "#333" }} body className="text-center">
          <GitHubJobs geoLoc={geoLoc}/>
          <br/>
          <br/>
          <br/>
          <CardText tag="h2">Local Restaurant:</CardText>
          <Restaurant geoLoc={geoLoc}/> 
          <br/>
          <br/>

        </CardBody>
        <CardBody inverse style={{ color: "#333" }}>
          <NASA geoLoc={geoLoc} />
          <br/>
      <CardText tag="h3">Local Weather:</CardText>
          <Weather geoLoc={geoLoc}/>
        </CardBody>
      </Card>

      
    

    </div>
  );
}

export default App;
