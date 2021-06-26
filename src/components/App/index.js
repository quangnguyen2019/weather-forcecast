import React, { useState, useEffect } from 'react';

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ForecastContainer from '../ForecastContainer/index';
import Loader from 'react-loader-spinner';

function App() {

    // Position: Latitude & Longitude
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [dataArr, setDataArr] = useState([]);

    // let url = "http://api.weatherunlocked.com/api/forecast/12.496359148010487,109.12066138465396?app_id=f543a0f4&app_key=ce7a7c30aa776c359baab10a2a880db3";
    let url = 
        `${process.env.REACT_APP_API_URL}/${lat},${long}?` + 
        `app_id=${process.env.REACT_APP_ID}&` + 
        `app_key=${process.env.REACT_APP_API_KEY}`;
        
    useEffect(() => {
        async function fetchData() {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            })

            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    setDataArr(data.Days);
                    console.log(data.Days);
                })
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
                
                <ForecastContainer dataArr={dataArr} />
            </div>
    );
}

export default App;