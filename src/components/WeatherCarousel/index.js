import React, { useState, useEffect } from 'react';

import '../../styles/styles.css';

export default function WeatherCarousel({ parentCallback }) {
    // STATES
    const [valInput, setValInput] = useState('');

    const searchIcon = process.env.PUBLIC_URL + '/assets/Icons/search.svg';

    const handleSearch = (e) => {
        const inputVal = (e.target.value).trim();

        // Pass input value to Parent Component
        if (e.key === "Enter" && inputVal !== '') {
            parentCallback(inputVal);
            setValInput('');
        }
    };

    const handleClick = () => {
        const inputVal = valInput.trim();

        if (inputVal !== '') {
            parentCallback(inputVal);
            setValInput('');
        }
    }

    return (
        <div className="weather-carousel-container">
            <div className="content-container">
                <div className="location-search">
                    <input 
                        type="text" 
                        placeholder="Search for location" 
                        value={valInput}
                        onChange={e => setValInput(e.target.value)}
                        onKeyPress={handleSearch}
                    />
                    <button className="btn-search" onClick={handleClick}>
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
                <div className="scroll-container"></div>
            </div>
        </div>
    );
}