import React, { useEffect, useState } from 'react';

const NASA = (props) => {
    const [Image, setImage] = useState();
    
    useEffect(() => {
        nasaFetch();
    }, []);
    
    function nasaFetch (){
        
        console.log(props.geoLoc.latitude, props.geoLoc.longitude);

        let lat = 29.78;
        let lon = 95.33;
        let date = "2018-01-01";
        let api_key = "HoY90UWi3PmKbKlRFevPRZNJq1nVe5b9LgN4fCWH"
        
        let url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&api_key=${api_key}`

        fetch(url)
        .then((res) => {
            console.log("Got here")
            return(res.json());
        }
    )        
    .then(json => {
        setImage(json.url)
        console.log(json.url)
    })
}



    return (
        <div>
            <h1>NASA Image</h1>
            <button onClick={nasaFetch}>Click for Image</button>
            <img src={Image}></img>

            
        </div>
    );
};



export default NASA;