import React, { useState, useEffect, useRef } from 'react';

import '../../styles/styles.css';

import { ReactComponent as DetectLocationIcon } from '../../images/Icons/gps.svg';
import searchIcon from '../../images/Icons/search.svg';

export default function WeatherCarousel(props) {
    const { 
        inputValCallback, detectLocCallback, 
        setIsDetectCallback 
    } = props;

    // STATES
    const [valInput, setValInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // REF
    let dropdownRef = useRef();

    const handleSearch = (e) => {
        const inputVal = (e.target.value).trim();

        // Pass input value to Parent Component
        if (e.key === "Enter" && inputVal !== '') {
            inputValCallback(inputVal);
            setValInput('');
            setDropdownOpen(false);
        }
    };

    const handleClick = () => {
        const inputVal = valInput.trim();

        if (inputVal !== '') {
            inputValCallback(inputVal);
            setValInput('');
            setDropdownOpen(false);
        }
    };

    const detectLocation = () => {
        detectLocCallback();
        setIsDetectCallback();
        setDropdownOpen(false);
    };

    // Handle clicks outside input field
    useEffect(() => {
        function close(e) {
            if (!dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        
        dropdownOpen
            ? document.addEventListener('click', close)
            : document.removeEventListener('click', close);
    }, 
    [dropdownOpen]);

    return (
        <div className="weather-carousel-container">
            <div className="content-container">
                <div ref={dropdownRef} className="location-search" >
                    <div className="search-box">
                        <input 
                            type="text" 
                            placeholder="Search for location"
                            value={valInput}
                            onChange={e => setValInput(e.target.value)}
                            onKeyPress={handleSearch}
                            onFocus={() => setDropdownOpen(true)}
                        />

                        <button className="btn-search" onClick={handleClick}>
                            <img src={searchIcon} alt="" />
                        </button>
                    </div>

                    {
                        dropdownOpen &&
                        <div className='dropdown'>
                            <button 
                                className="btn-detect-location" 
                                onClick={detectLocation}
                            >
                                <span>Detect my location</span>
                                <DetectLocationIcon className="detect-location-icon" />
                            </button>
                        </div>
                    }
                </div>
                <div className="scroll-container"></div>
            </div>
        </div>
    );
}