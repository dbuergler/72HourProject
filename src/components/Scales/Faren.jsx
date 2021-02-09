import React, { useState, useEffect } from 'react';

const Faren = (props) => {

    const [weatherResultsFaren, setWeatherResultsFaren] = useState([]);

    useEffect(() => {
        console.log(props.geoLoc);
        if(props.geoLoc){
            getWeatherFaren()
        }
}, [props.geoLoc]);
    
    function getWeatherFaren() {
        let lat = props.geoLoc.latitude;
        let lon = props.geoLoc.longitude;

        // console.log(props.geoLoc.latitude, props.geoLoc.longitude);
        // let lat = -50;
        // let lon = 50.5;

        // let scale = "&units=imperial"

        // Farenheit - imperial ="&units=imperial"
        // Centigrade - metric ="$units=metric"
        
        let urlFaren = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f955c3235c70bd91a2967cafb892146&units=imperial`;

        fetch(urlFaren)
        .then((res) => {
            return(res.json());
        })
        .then(json => {
            console.log(json);
            console.log(json.weather[0].main);
            console.log(json.main.temp)
            setWeatherResultsFaren(json.main.temp);
        });
    }

    return(
        <>
        <p>
        {weatherResultsFaren} Degrees Farenheit
        </p>
        </>
    )
}

export default Faren;