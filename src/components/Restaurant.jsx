import React, { useEffect, useState } from 'react';

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        getRestaurantList()
    }, []);

    function getRestaurantList() {
        console.log(props.geoLoc.latitude, props.geoLoc.longitude);

        let url = 'https://developers.zomato.com/api/v2.1/geocode?lat=40.1908087&lon=-85.3901047';
        let key = 'd7e58923a65d5c41fab057b7dd3c4db6';
        console.log(url);

        fetch(url, {
            method: 'GET',
            headers: {
                'user-key': key,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            return(res.json());
        })
        .then(json => {
            console.log(json);
            setRestaurant(json);
        })
    }

    return (
        <div>
            
        </div>
    )
}

export default Restaurant;