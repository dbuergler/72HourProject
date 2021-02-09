import React, { useEffect, useState } from 'react';
import Faren from './Scales/Faren';
import Centi from './Scales/Centi';

const Weather = (props) => {
    const [showWeather, setShowWeather] = useState(true);

    // useEffect(() => {
    //     if(props.geoLoc){
        //     getWeather()
    // }
    // }, [props.geoLoc, ]);



    function handleToggle(){

        setShowWeather(!showWeather)
    }

    return (
        <div>

            {showWeather === true ? <Faren  geoLoc={props.geoLoc}/> : <Centi  geoLoc={props.geoLoc}/>}
            <button onClick= {handleToggle}>Switch Temp Scale</button>
        </div>
    )
    }

    
export default Weather;