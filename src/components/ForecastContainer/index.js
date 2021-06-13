import React, { useState, useEffect } from 'react';

import './ForecastContainer.css';
import DayCard from '../DayCard/index';

export default function WeatherContainer() {
    ///  STATE
    const [dataArr, setDataArr] = useState([]);

    let url = "http://api.weatherunlocked.com/api/forecast/12.496359148010487,109.12066138465396?app_id=f543a0f4&app_key=ce7a7c30aa776c359baab10a2a880db3";

    useEffect(() => {
        async function fetchData() {
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                setDataArr(data.Days);
            })
        }
        fetchData();
    }, []);

    const getIcon = (arr) => {
        // Count Frequency
        const hashmap = arr.reduce((result, val) => {
            result[val.wx_desc] = (result[val.wx_desc] | 0) + 1;
            return result;
        }, {});

        // Get the most occurring value
        const mostFrequent = Object.keys(hashmap).reduce((a, b) => 
            hashmap[a] > hashmap[b] ? a : b
        );

        return (arr.filter(x => x.wx_desc === mostFrequent))[0].wx_icon;
    }

    return (
        <div className="forecast-container">
            <div className="temp-content"></div>
            <div className="forecast-days">
                <p className="forecast-title"> 
                    7 day forecast 
                </p>
                <div className="card-container">
                    {
                        dataArr.map((val, index) =>
                            <DayCard
                                date={val.date}
                                icon={getIcon(val.Timeframes)}
                                tempMax={Math.round(val.temp_max_c)} 
                                tempMin={Math.round(val.temp_min_c)} 
                                key={index} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}