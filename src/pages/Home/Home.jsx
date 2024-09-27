

import React, { useEffect, useState } from 'react'
import "./index.css"
function Home() {
    const [albums, setAlbums] = useState([])
    useEffect(function () {
        fetch("https://strapi-store-server.onrender.com/api/products", {
            method: "GET"
        })
            .then(function (response) {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                setAlbums(data.data);
            })
            .catch(error => {
                console.log(error);

            })
    }, [])
    return (

        <div className='container'>
            <div className='hero-box'>
                {
                    albums.length > 0 && albums.map(function ({ attributes }, index) {
                        console.log(attributes)
                        return (
                            <div  key={index}  >
                                <div key={index} className='box' >
                                    <img src={attributes.image} className='image' alt="rasimlar" width={330} height={200} />
                                    <h3>{attributes.title}</h3>
                                    <span>${attributes.price}</span>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Home