import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat'

import '../../styles/styles.css';
import DetailLine from '../DetailLine/index';

dayjs.extend(localizedFormat);

export default function SummaryForecast(props) {
    // PROPS
    const { dataArr, getIconPath, unitDeg, switchUnitDeg } = props;

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
            <p className="update-time">
                {/* 8:30 AM(PM) GMT+07:00 */}
                Updated as of {dayjs().format('LT [GMT]Z')}
            </p>

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
                                {
                                    unitDeg === "C" ?
                                    Math.round(timeframe.temp_c) :
                                    Math.round(timeframe.temp_f)
                                }&deg;
                            </span>

                            <div className="unit-group">
                                <p> {unitDeg === "C" ? "C" : "F"} </p>
                                <button 
                                    className="btn-switcher" 
                                    onClick={() => {
                                        switchUnitDeg();
                                        localStorage.setItem(
                                            "selectedUnit", 
                                            unitDeg === "C" ? "F" : "C"
                                        );
                                    }}
                                > 
                                    {unitDeg === "C" ? "F" : "C"} 
                                </button>
                            </div>
                        </div>

                        <div className="current-summary">
                            <p className="caption">{ timeframe.wx_desc }</p>
                            <p className="summary"> 
                                { 
                                    +timeStr < 1700 ? 
                                    ( `The high will be ${Math.round(
                                        unitDeg === "C" ? 
                                        dataArr[0].temp_max_c : 
                                        dataArr[0].temp_max_f)}\u00b0.` ) :
                                    ( `The low will be ${Math.round(unitDeg === "C" ? 
                                        dataArr[0].temp_min_c : 
                                        dataArr[0].temp_min_f)}\u00b0.` )
                                }
                            </p>
                        </div>
                    </div>
                    
                    <DetailLine timeframe={timeframe} unitDeg={unitDeg} />
                </div>
            }
        </div>
    );
}