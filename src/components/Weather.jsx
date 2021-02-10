
import React, { useEffect, useState } from 'react';
import Faren from './Scales/Faren';
import Centi from './Scales/Centi';
import {Button, CardText, Card} from 'reactstrap'

const Weather = (props) => {
    const [showWeather, setShowWeather] = useState(true);

    
    function handleToggle(){

        setShowWeather(!showWeather)
    }

    return (
        <div>
            
            <h5>{showWeather === true ? <Faren  geoLoc={props.geoLoc}/> : <Centi  geoLoc={props.geoLoc}/>}</h5>
            
            <Button onClick= {handleToggle}>Switch Temp Scale</Button>
            
        </div>
    )
    }

    

export default Weather;