import React from 'react';

import './DayCard.css';

export default function DayCard({ date, icon, tempMax, tempMin }) {
    
    const getDay = (date) => {
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        
        // Reverse date string "12/06/2021" => "2021/06/12"
        // Set (hour, min, sec, ms) = 0
        let reverseDateStr = new Date( date.split("/").reverse().join("/") );

        // Get day of week 
        let day = days[reverseDateStr.getDay()];

        // Get today, set (hour, min, sec, ms) = 0
        let today = new Date();
        today.setHours(0,0,0,0);

        // return: "Today" OR "Tue 12" (example)
        return (
            (today).getTime() === reverseDateStr.getTime() ?
            "Today" : `${day} ${reverseDateStr.getDate()}`
        );
    };

    return (
        <div className="day-card">
            <p> {getDay(date)} </p>
            <img className="icon" src={icon} alt=""/>
            <div className="footer-temperature">
                <p> {tempMax}&deg; </p>
                <p> {tempMin}&deg; </p>
            </div>
        </div>
    )
}