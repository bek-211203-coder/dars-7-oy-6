

import React, { useEffect, useState } from 'react'
import LazyImage from "../../componets/LazyImage.jsx"
import Error from '../../assets/error_image.png'

function About() {
    const [albums, setAlbums] = useState([])
    useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/photos", {
            method: "GET"
        })
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                setAlbums(data);
            })
            .catch(error => {
                console.log(error);

            })
    }, [])
    return (
        <div className='container'>
            <div className='hero-box'>
                {
                    albums.length > 0 && albums.map(function (value, index) {
                        console.log(value);

                        return (

                            <div key={index}>
                                {/* <img className='image' src={value.url} alt="rasimlar" width={250} height={200} /> */}
                                <LazyImage
                                    src={value.url}
                                    placeholder={Error} 
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About