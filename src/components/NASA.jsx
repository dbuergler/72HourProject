import React, { useEffect, useState } from 'react';


const NASA = () => {
    const [Image, setImage] = useState();

    function handleFetch (){
        const url = "https://api.nasa.gov/planetary/imagery?api_key=vVKyluvUh3BVdlsx78Dxs1rvbIiDlkhayfGWw8BD"
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setImage(json.image)
            console.log(json.image)
        })
    }

    useEffect(() => {
        handleFetch();
    }, []);

    
    return (
        <div>
            <h1>NASA Image</h1>
            <button onClick={handleFetch}>Click for Image</button>

        </div>
    );
};



export default NASA;