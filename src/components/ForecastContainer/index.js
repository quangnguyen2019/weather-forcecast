import React from 'react';

import './ForecastContainer.css';

import SummaryForecast from '../SummaryForecast';
import DayCard from '../DayCard/index';

export default function ForecastContainer({ dataArr }) {
    
    // Get Icon's URL
    const getIconPath = (timeframe) => {
        // Get icon's name from Timeframe
        const iconName = timeframe.wx_icon;

        // Get icon's URL from public folder
        // Replace ".GIF" extension to ".PNG"
        // Return icon's URL
        return (
            `${process.env.PUBLIC_URL}/assets/weather_icons_png/` + 
            iconName.replace('gif', 'png')
        );
    }

    const mostOccuringIcon = (arr) => {

        // Count Frequency =>  Object { a: 2, b: 3, ... }
        const hashmap = arr.reduce((result, val) => {
            result[val.wx_desc] = ( result[val.wx_desc] | 0 ) + 1;
            return result;
        }, {});

        // Get the most occurring value
        const mostFrequent = 
            Object.keys(hashmap)
                  .reduce((a, b) => hashmap[a] > hashmap[b] ? a : b
            );

        const timeframe = (arr.filter(x => x.wx_desc === mostFrequent))[0];
        
        return getIconPath(timeframe);
    };

    return (
        <div className="forecast-container">
            <SummaryForecast 
                dataArr={dataArr} 
                getIconPath={getIconPath}
            />

            <div className="forecast-days">
                <p className="forecast-title"> 
                    7 day forecast 
                </p>
                <div className="card-container">
                    {
                        dataArr.map((val, index) =>
                            <DayCard
                                date={val.date}
                                icon={mostOccuringIcon(val.Timeframes)}
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