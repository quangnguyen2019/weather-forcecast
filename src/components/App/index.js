import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import '../../styles/styles.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ForecastContainer from '../ForecastContainer/index';
import WeatherCarousel from '../WeatherCarousel/index';

function App() {

    // STATES
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [dataArr, setDataArr] = useState([]);
    const [address, setAddress] = useState('');
    // Get input value from CHILD COMPONENT
    const [searchAddr, setSearchAddr] = useState('');
    //
    const [isDetect, setIsDetect] = useState('');

    // ENVIRONMENT VAR
    const geocoding_api = process.env.REACT_APP_API_POSITIONSTACK;
    const geocoding_access_key = process.env.REACT_APP_ACCESS_KEY_POSITIONSTACK;
    const weather_api = process.env.REACT_APP_API_WEATHER;
    const weather_app_id = process.env.REACT_APP_ID;
    const weather_app_key = process.env.REACT_APP_API_KEY;

    // API
    let urlForward_Geocoding = 
        `${geocoding_api}/forward?` +
        `access_key=${geocoding_access_key}&` +
        `query=${searchAddr}&` +
        `limit=1`;

    let urlReverse_Geocoding = 
        `${geocoding_api}/reverse?` +
        `access_key=${geocoding_access_key}&` +
        `query=${lat},${long}&` +
        `limit=1`;
        
    let urlWeather = 
        `${weather_api}/${lat},${long}?` + 
        `app_id=${weather_app_id}&` + 
        `app_key=${weather_app_key}`;
       

     // CALLBACK PASSED TO CHILD COMPONENT
     const inputValCallback = (val) => {
        setSearchAddr(val);
    };

    const detectLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
    }

    const setIsDetectCallback = () => {
        setIsDetect(true);
    }
        
    useEffect(() => {
        async function fetchData() {
            if (searchAddr !== '' && !isDetect) {
                // Get location coordinates 
                // according to input value
                await fetch(urlForward_Geocoding)
                    .then(res => res.json())
                    .then(result => {
                        const data = result.data[0];
                        
                        setLat(data.latitude);
                        setLong(data.longitude);

                        // Show address
                        data.county ?       // Avoid showing NULL value
                            setAddress(`${data.county}, ${data.region}, ${data.country}`) :
                            setAddress(`${data.region}, ${data.country}`);
                    });
            } 
            else {
                if (isDetect) {
                    setSearchAddr('');
                    setIsDetect(false);
                }
                else {
                    // Get current location coordinates
                    // when starting to load website
                    detectLocation();
                }
            }

            if (lat !== 0 && long !== 0) {
                // Get address from coordinate
                searchAddr === '' &&
                await fetch(urlReverse_Geocoding)
                    .then(res => res.json()) 
                    .then(result => {
                        let addr = result.data[0];
                        setAddress(`${addr.county}, ${addr.region}, ${addr.country}`);  
                    })

                // Get weather data
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
    [searchAddr, long]);
   

    return (
        ( dataArr.length === 0 ) ?
            <Loader
                className="loader"
                type="Circles"
                color="#00Bfff"
                height={100}
                width={100}
            /> :
            <div className="App">
                <div className="background-container">
                    <div className="first-layer"></div>
                    <div className="second-layer"></div>
                </div>
                
                <WeatherCarousel 
                    inputValCallback={inputValCallback} 
                    detectLocCallback={detectLocation}
                    setIsDetectCallback={setIsDetectCallback}
                />
                <ForecastContainer address={address} dataArr={dataArr} />
            </div>
    );
}

export default App;