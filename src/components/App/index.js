import React, { useState, useEffect } from 'react';

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ForecastContainer from '../ForecastContainer/index';
import Loader from 'react-loader-spinner';

function App() {

    // Position: Latitude & Longitude
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [dataArr, setDataArr] = useState([]);
    const [address, setAddress] = useState('');

    // API
    let urlReverse_Geocoding = 
        `${process.env.REACT_APP_API_REVERSE}?` +
        `access_key=${process.env.REACT_APP_ACCESS_KEY_POSITIONSTACK}&` +
        `query=${lat},${long}&` +
        `limit=1`;
        
    let urlWeather = 
        `${process.env.REACT_APP_API_WEATHER}/${lat},${long}?` + 
        `app_id=${process.env.REACT_APP_ID}&` + 
        `app_key=${process.env.REACT_APP_API_KEY}`;
       
        
    useEffect(() => {
        async function fetchData() {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            })

            if (lat !== 0 && long !== 0) {
                await fetch(urlReverse_Geocoding)
                    .then(res => res.json())
                    .then(result => {
                        let addr = result.data[0];
                        setAddress(`${addr.county}, ${addr.region}, ${addr.country}`);
                    })

                await fetch(urlWeather)
                    .then(res => res.json())
                    .then(data => {
                        setDataArr(data.Days);
                        console.log(data.Days);
                    })
            }
        }
        fetchData();
    }, 
    [lat, long]);

    return (
        ( dataArr.length === 0 ) ?
            <Loader
                className="loader"
                type="BallTriangle"
                color="#00Bfff"
                height={100}
                width={100}
            /> :
            <div className="App">
                <div className="background-container">
                    <div className="first-layer"></div>
                    <div className="second-layer"></div>
                </div>
                
                <ForecastContainer address={address} dataArr={dataArr} />
            </div>
    );
}

export default App;