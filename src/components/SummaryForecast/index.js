import React, { useEffect, useState } from 'react';

import './SummaryContainer.css';
import DetailLine from '../DetailLine/index';

export default function SummaryForecast({ dataArr, getIconPath }) {
    // STATE
    const [timeframe, setTimeframe] = useState({});

    // Get string of current time
    const date = new Date();
    const tempMin = date.getMinutes();
    const minute = (tempMin < 10) ? ("0" + tempMin) : tempMin;
    const timeStr = '' + date.getHours() + minute;
    
    // Taken from API the time is smaller and closet
    // to the current time
    useEffect(() => {
        if (dataArr.length > 0) {
            const timeframe = 
                ( dataArr[0].Timeframes
                    .filter(x => x.time < +timeStr)
                    .reverse() )[0];
            
            setTimeframe(timeframe)
        }
    }, [dataArr]);


    return(
        <div className="current-container">
            {
                dataArr.length > 0 &&
                <div className="summary-container">
                    <div className="summary-line">
                        <div className="current-temperature">
                            <img 
                                className="summary-icon"
                                src={
                                    Object.keys(timeframe).length > 0 ? 
                                    getIconPath(timeframe) : undefined
                                } 
                                alt="" 
                            />
                            <span className="temperature"> 
                                {Math.round(timeframe.temp_c)}&deg;C 
                            </span>
                        </div>
                        <div className="current-summary">
                            <p className="caption">{ timeframe.wx_desc }</p>
                            <p className="summary"> 
                                { 
                                    +timeStr < 1700 ? 
                                    `The high will be ${Math.round(dataArr[0].temp_max_c)}\u00b0.` :
                                    `The low will be ${Math.round(dataArr[0].temp_min_c)}\u00b0.`
                                }
                            </p>
                        </div>
                    </div>
                    
                    <DetailLine dataArr={dataArr} />
                </div>
            }
        </div>
    );
}