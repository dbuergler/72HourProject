import React, { useEffect, useState } from 'react';

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState([])
    const [isLocal, setIsLocal] = useState(true)

    useEffect(() => {
        if(props.geoLoc){
            getRestaurantList()
        }
    }, [props.geoLoc, isLocal]);


    function getRestaurantList() {
        console.log(props.geoLoc.latitude, props.geoLoc.longitude);
        let lat = props.geoLoc.latitude;
        let lon = props.geoLoc.longitude;

        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
        let apiKey = 'd7e58923a65d5c41fab057b7dd3c4db6';

        fetch(url, {
            method: 'GET',
            headers: {
                'user-key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then((res) => {
            return(res.json());
        })
        .then(json => {
            console.log(json.nearby_restaurants[0].restaurant.name);
            setRestaurant(json.nearby_restaurants[0].restaurant.name);
        })
    }


    return (
        <div>
            <p>{restaurant}</p>
        </div>
    )
}

export default Restaurant;