import React, { useState, useEffect } from 'react';

const Centi = (props) => {

    const [weatherResultsCenti, setWeatherResultsCenti] = useState([]);

    useEffect(() => {
        console.log(props.geoLoc);
        if(props.geoLoc){
            getWeatherCenti()
        }
}, [props.geoLoc]);
    
    function getWeatherCenti() {
        let lat = props.geoLoc.latitude;
        let lon = props.geoLoc.longitude;

        // console.log(props.geoLoc.latitude, props.geoLoc.longitude);
        // let lat = -50;
        // let lon = 50.5;

        // let scale = "&units=metric"

        // Farenheit - imperial ="&units=imperial"
        // Centigrade - metric ="&units=metric"
        
        let urlCenti = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f955c3235c70bd91a2967cafb892146&units=metric`;

        fetch(urlCenti)
        .then((res) => {
            console.log("anything")
            return(res.json());
        })
        .then(json => {
            console.log(json);
            console.log(json.weather[0].main);
            console.log(json.main.temp)
            setWeatherResultsCenti(json.main.temp);
        });
    }

    return(
        <>
        <p>
        {weatherResultsCenti} Degrees Celsius
        </p>
        </>
    )
}

export default Centi;