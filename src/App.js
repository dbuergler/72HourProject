import React, { useEffect, useState } from 'react';
import {render} from 'react-dom'
import NASA from './components/NASA';
import GitHubJobs from './components/GitHubJobs';
import Restaurant from './components/Restaurant';



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

    <div className="App">
   
      <GitHubJobs geoLoc={geoLoc}/>
      <NASA geoLoc={geoLoc} />
      <Restaurant geoLoc={geoLoc} /> 


    </div>
  );
}

export default App;
