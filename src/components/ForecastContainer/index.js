import React, { useState } from 'react';

import '../../styles/styles.css';

import SummaryForecast from '../SummaryForecast';
import DayCard from '../DayCard/index';

export default function ForecastContainer({ address, dataArr }) {
    // STATE
    const [unitDeg, setUnitDeg] = useState(
        localStorage.getItem("selectedUnit") || "C"
    );

    // Callback switch unit degree
    const switchUnitDeg = () => {
        setUnitDeg(unitDeg === "C" ? "F" : "C");
    };
    
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
            <div className="location">
                <span className="location-home-icon">
                    <svg viewBox="0 0 512 512">
                        <path d="M498.195 222.695l-.035-.035L289.305 13.813C280.402 4.905 268.566 0 255.977 0c-12.59 0-24.426 4.902-33.332 13.809L13.898 222.55c-.07.07-.14.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.445 13.238 31.277 13.746.48.047.965.07 1.453.07h8.324v153.7C54.832 487.254 79.578 512 110 512h81.71c8.282 0 15-6.715 15-15V376.5c0-13.879 11.29-25.168 25.169-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.285 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.16v-153.7h7.719c12.586 0 24.422-4.902 33.332-13.808 18.36-18.371 18.367-48.254.023-66.637zm0 0"></path>
                    </svg>
                </span>
                <span className="location-name">{address}</span>
            </div>

            <SummaryForecast 
                dataArr={dataArr} 
                getIconPath={getIconPath}
                unitDeg={unitDeg}
                switchUnitDeg={switchUnitDeg}
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
                                tempMax={Math.round(unitDeg === "C" ? val.temp_max_c : val.temp_max_f)} 
                                tempMin={Math.round(unitDeg === "C" ? val.temp_min_c : val.temp_min_f)} 
                                key={index} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}