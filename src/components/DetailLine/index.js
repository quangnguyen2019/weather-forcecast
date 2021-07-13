import React from 'react';

import '../../styles/styles.css';

import { ReactComponent as FeelLikeIcon } from '../../images/Icons/temperature.svg';
import { ReactComponent as WindIcon } from '../../images/Icons/wind.svg';
import { ReactComponent as WindDirectionIcon } from '../../images/Icons/arrow.svg';
import { ReactComponent as VisibilityIcon } from '../../images/Icons/visibility.svg';
import { ReactComponent as HumidityIcon } from '../../images/Icons/humidity.svg';
import { ReactComponent as PressureIcon } from '../../images/Icons/barometer.svg';
import { ReactComponent as DewpointIcon } from '../../images/Icons/leaf.svg';

export default function DetailLine({ timeframe, unitDeg }) {
    return (
        <div className="detail-line">
            <div className="detail-item">
                <FeelLikeIcon className="detail-icon" />

                <div className="detail-item-group">
                    <div className="detail-item-title">Feels Like</div>
                    <div className="detail-item-value">
                        {Math.round(
                            unitDeg === "C" ? 
                            timeframe.feelslike_c : 
                            timeframe.feelslike_f)}&deg;
                    </div>
                </div>
            </div>

            <div className="detail-item">
                <WindIcon className="detail-icon" />

                <div className="detail-item-group">
                    <div className="detail-item-title">Wind</div>
                    <div className="detail-item-value">
                        {   
                            unitDeg === "C" ? 
                            `${timeframe.windspd_kmh} km/h` :
                            `${timeframe.windspd_mph} mph`
                        }
                       
                        <WindDirectionIcon 
                            className="wind-dir-icon" 
                            style={{ 
                                transform: `rotate(${timeframe.winddir_deg}deg)` 
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="detail-item">
                <VisibilityIcon className="detail-icon" />

                <div className="detail-item-group">
                    <div className="detail-item-title">Visibility</div>
                    <div className="detail-item-value">
                        {
                            unitDeg === "C" ?
                            `${timeframe.vis_km} km` :
                            `${timeframe.vis_mi} mi`
                        }
                    </div>
                </div>
            </div>

            <div className="detail-item">
                <HumidityIcon className="detail-icon" />

                <div className="detail-item-group">
                    <div className="detail-item-title">Humidity</div>
                    <div className="detail-item-value">
                        {timeframe.humid_pct}%
                    </div>
                </div>
            </div>

            <div className="detail-item">
                <PressureIcon className="detail-icon" />

                <div className="detail-item-group">
                    <div className="detail-item-title">Pressure</div>
                    <div className="detail-item-value">
                        {
                            unitDeg === "C" ?
                            `${timeframe.slp_mb} mb` :
                            `${timeframe.slp_in} in`
                        }    
                    </div>
                </div>
            </div>

            <div className="detail-item">
                <DewpointIcon className="detail-icon" />
                
                <div className="detail-item-group">
                    <div className="detail-item-title">Dewpoint</div>
                    <div className="detail-item-value">
                        {Math.round(
                            unitDeg === "C" ?
                            timeframe.dewpoint_c :
                            timeframe.dewpoint_f)}&deg;
                    </div>
                </div>
            </div>
        </div>
    );
}