import React, { useEffect, useState } from 'react';
import {Button} from 'reactstrap'

const NASA = (props) => {
    const [Image, setImage] = useState();
    
    
    useEffect(() => {
        console.log(props.geoLoc);
        if(props.geoLoc){
            nasaFetch();
        }
    }, [props.geoLoc]);
    
    function nasaFetch (){
        
        
        let lat = props.geoLoc.latitude;
        let lon = props.geoLoc.longitude;
        
        //let date = new Date();
        //date = date.toISOString();
        //date = date.slice(0,10);
        
        let date = "2016-01-01";
        let dim = .25;

        let api_key = "HoY90UWi3PmKbKlRFevPRZNJq1nVe5b9LgN4fCWH"
        
        let url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${api_key}`

        fetch(url)
        .then((res) => {
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
            <h2>NASA Satellite Location</h2>
            <Button onClick={nasaFetch}>Click for Image</Button>
            <br></br>
            <br></br>
            <img  width= "40%" src={Image}></img>            
        </div>
    );
};






export default NASA;