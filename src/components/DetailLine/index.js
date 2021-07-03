import React from 'react';

import '../../styles/styles.css';

export default function DetailLine({ timeframe, unitDeg }) {
    return (
        <div className="detail-line">
            <div className="detail-item">
                <svg
                    viewBox="0 0 250.189 250.189"
                    className="detail-icon"
                >
                    <path d="M159.845 147.251V34.744C159.845 15.586 144.255 0 125.093 0c-19.159 0-34.746 15.586-34.746 34.744V147.25c-14.234 10.843-22.617 27.59-22.617 45.575 0 31.631 25.732 57.364 57.363 57.364 31.633 0 57.367-25.733 57.367-57.364 0-17.983-8.383-34.73-22.615-45.574zm-34.752 87.938c-23.359 0-42.363-19.004-42.363-42.364 0-14.294 7.188-27.537 19.228-35.425a7.502 7.502 0 003.39-6.273V34.744c0-10.887 8.858-19.744 19.746-19.744 10.892 0 19.752 8.857 19.752 19.744v116.383a7.498 7.498 0 003.39 6.273c12.038 7.889 19.226 21.132 19.226 35.425-.002 23.36-19.008 42.364-42.369 42.364z"></path>
                    <path d="M132.595 169.042V69.924c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v99.118c-10.104 3.183-17.43 12.622-17.43 23.783 0 13.767 11.16 24.931 24.93 24.931 13.773 0 24.932-11.164 24.932-24.931-.001-11.162-7.327-20.602-17.432-23.783z"></path>
                </svg>
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
                <svg
                    viewBox="0 0 368 368"
                    className="detail-icon"
                >
                    <path d="M296 48c-39.704 0-72 32.304-72 72 0 4.416 3.576 8 8 8s8-3.584 8-8c0-30.88 25.128-56 56-56s56 25.12 56 56-25.128 56-56 56H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h288c39.704 0 72-32.304 72-72s-32.296-72-72-72z"></path>
                    <path d="M144 32c-30.88 0-56 25.12-56 56 0 4.416 3.584 8 8 8s8-3.584 8-8c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h136c30.88 0 56-25.12 56-56s-25.12-56-56-56zM280 224H8c-4.416 0-8 3.584-8 8s3.584 8 8 8h272c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 30.88 25.128 56 56 56s56-25.12 56-56-25.128-56-56-56z"></path>
                </svg>
                <div className="detail-item-group">
                    <div className="detail-item-title">Wind</div>
                    <div className="detail-item-value">
                        {   
                            unitDeg === "C" ? 
                            `${timeframe.windspd_kmh} km/h` :
                            `${timeframe.windspd_mph} mph`
                        }
                        <svg
                            className="wind-dir-icon"
                            viewBox="0 0 511.335 511.335"
                            style={{ 
                                transform: `rotate(${timeframe.winddir_deg}deg)` 
                            }}
                        >
                            <path d="M249.176 3.656L45.665 503.147c-2.15 5.277 3.719 10.215 8.551 7.195l198.3-123.961a3.926 3.926 0 014.148-.009l200.478 124.057c4.843 2.997 10.687-1.962 8.52-7.228L260.044 3.637c-2-4.859-8.885-4.846-10.868.019z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="detail-item">
                <svg
                    viewBox="0 0 512 512"
                    className="detail-icon"
                >
                    <path d="M306 316c0-27.57-22.43-50-50-50s-50 22.43-50 50 22.43 50 50 50 50-22.43 50-50z"></path>
                    <path d="M2.505 309.379a10.001 10.001 0 000 13.241c1.116 1.263 27.84 31.286 72.361 61.642C128.29 420.688 191.351 446 256 446c64.658 0 127.719-25.318 181.133-61.738 44.521-30.355 71.246-60.378 72.361-61.642a10.001 10.001 0 000-13.241c-1.116-1.263-27.84-31.286-72.361-61.642C383.709 211.312 320.649 186 256 186c-64.658 0-127.719 25.318-181.133 61.738-44.522 30.355-71.246 60.378-72.362 61.641zM146 316c0-60.931 49.627-110 110-110 60.463 0 110 49.165 110 110 0 60.931-49.627 110-110 110-60.463 0-110-49.165-110-110zm279.423-52.04c30.496 20.736 52.605 41.702 62.798 52.044-10.121 10.279-32.009 31.043-62.354 51.733-20.774 14.164-47.836 29.776-79.142 41.272C370.938 385.385 386 352.421 386 316c0-36.422-15.062-69.387-39.277-93.012 31.122 11.428 58.029 26.917 78.7 40.972zm-260.148-40.97C141.062 246.614 126 279.579 126 316c0 36.422 15.062 69.387 39.277 93.012-31.123-11.428-58.03-26.917-78.7-40.972-30.493-20.734-52.603-41.7-62.798-52.044 10.121-10.279 32.009-31.043 62.354-51.733 20.775-14.165 47.837-29.777 79.142-41.273zM171 168.775c4.783-2.761 6.422-8.877 3.66-13.66l-30-51.961c-2.761-4.784-8.878-6.422-13.66-3.66-4.783 2.761-6.422 8.877-3.66 13.66l30 51.961c2.774 4.807 8.899 6.409 13.66 3.66zM381 99.494c-4.782-2.762-10.899-1.123-13.66 3.66l-30 51.961c-2.762 4.783-1.123 10.899 3.66 13.66 4.762 2.749 10.887 1.144 13.66-3.66l30-51.961c2.762-4.783 1.123-10.899-3.66-13.66zM266 136V76c0-5.523-4.477-10-10-10s-10 4.477-10 10v60c0 5.523 4.477 10 10 10s10-4.477 10-10z"></path>
                </svg>
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
                <svg
                    viewBox="0 0 512 512"
                    className="detail-icon"
                >
                    <path d="M331.762 429.004c7.726 7.887 7.601 20.55-.29 28.281C295.466 492.566 247 512 195 512c-52.117 0-101.066-20.086-137.828-56.559C20.305 418.863 0 370.055 0 318v-5.36c0-67.566 56.46-132.359 106.273-189.523C140.063 84.344 175 44.247 175 20c0-11.047 8.953-20 20-20s20 8.953 20 20c0 25.836 35.438 66.145 69.703 105.129 6.235 7.09 12.68 14.422 19.05 21.808 7.216 8.364 6.282 20.993-2.077 28.208-8.363 7.214-20.992 6.285-28.211-2.083-6.246-7.242-12.63-14.503-18.8-21.523-23.481-26.71-45.2-51.418-60.013-75.047-14.574 22.817-35.57 46.906-58.222 72.903C91.23 201.265 40 260.059 40 312.64V318c0 84.914 69.531 154 155 154 41.469 0 79.992-15.371 108.477-43.285 7.89-7.73 20.55-7.602 28.285.289zM492 355c-7.71 0-18.176-7.234-28.71-19.848C454.714 324.887 441.851 319 428 319s-26.715 5.887-35.29 16.152C382.177 347.766 371.71 355 364 355s-18.176-7.234-28.71-19.848C326.714 324.887 313.851 319 300 319s-26.715 5.887-35.29 16.152C254.177 347.766 243.71 355 236 355s-18.176-7.234-28.71-19.848C198.714 324.887 185.851 319 172 319s-26.715 5.887-35.29 16.152C126.177 347.766 115.71 355 108 355c-11.047 0-20 8.953-20 20s8.953 20 20 20c20.465 0 40.453-11.508 59.41-34.207.942-1.121 2.656-1.793 4.59-1.793s3.648.672 4.59 1.797C195.547 383.492 215.535 395 236 395s40.453-11.508 59.41-34.207c.942-1.121 2.656-1.793 4.59-1.793s3.648.672 4.59 1.797C323.547 383.492 343.535 395 364 395s40.453-11.508 59.41-34.207c.942-1.121 2.656-1.793 4.59-1.793s3.648.672 4.59 1.797C451.547 383.492 471.535 395 492 395c11.047 0 20-8.953 20-20s-8.953-20-20-20zM264.71 235.152C254.177 247.766 243.71 255 236 255c-11.047 0-20 8.953-20 20s8.953 20 20 20c20.465 0 40.453-11.508 59.41-34.207.942-1.121 2.656-1.793 4.59-1.793s3.648.672 4.59 1.797C323.547 283.492 343.535 295 364 295s40.453-11.508 59.41-34.207c.942-1.121 2.656-1.793 4.59-1.793s3.648.672 4.59 1.797C451.547 283.492 471.535 295 492 295c11.047 0 20-8.953 20-20s-8.953-20-20-20c-7.71 0-18.176-7.234-28.71-19.848C454.714 224.887 441.851 219 428 219s-26.715 5.887-35.29 16.152C382.177 247.766 371.71 255 364 255s-18.176-7.234-28.71-19.848C326.714 224.887 313.851 219 300 219s-26.715 5.887-35.29 16.152zm0 0"></path>
                </svg>
                <div className="detail-item-group">
                    <div className="detail-item-title">Humidity</div>
                    <div className="detail-item-value">
                        {timeframe.humid_pct}%
                    </div>
                </div>
            </div>
            <div className="detail-item">
                <svg
                    viewBox="0 0 128 128"
                    className="detail-icon"
                >
                    <path d="M64 0a64 64 0 1064 64A64.073 64.073 0 0064 0zm0 124.5A60.5 60.5 0 11124.5 64 60.568 60.568 0 0164 124.5z"></path>
                    <path d="M64 8a56 56 0 1056 56A56.064 56.064 0 0064 8zm0 108.5A52.5 52.5 0 11116.5 64 52.559 52.559 0 0164 116.5z"></path>
                    <path d="M64 31.13a1.751 1.751 0 001.75-1.75v-9.625a1.75 1.75 0 10-3.5 0v9.625A1.751 1.751 0 0064 31.13zM88.478 41.269a1.743 1.743 0 001.237-.513l6.806-6.8a1.75 1.75 0 10-2.475-2.475l-6.805 6.806a1.75 1.75 0 001.237 2.987zM38.285 87.238l-6.806 6.805a1.75 1.75 0 102.475 2.475l6.805-6.806a1.749 1.749 0 10-2.474-2.474zM108.242 62.247h-9.625a1.75 1.75 0 000 3.5h9.625a1.75 1.75 0 000-3.5zM29.383 62.247h-9.625a1.75 1.75 0 100 3.5h9.625a1.75 1.75 0 000-3.5zM89.715 87.238a1.749 1.749 0 00-2.474 2.474l6.805 6.806a1.75 1.75 0 002.475-2.475zM33.954 31.476a1.75 1.75 0 10-2.475 2.475l6.806 6.805a1.749 1.749 0 002.474-2.474zM76.8 94.989a1.744 1.744 0 00-1.829-.409 32.6 32.6 0 01-21.938 0 1.748 1.748 0 00-1.829.409l-7.63 7.63a1.75 1.75 0 00.476 2.813 45.957 45.957 0 0039.9 0 1.75 1.75 0 00.476-2.813zm-12.8 11.5a41.992 41.992 0 01-16.158-3.189l5.063-5.063a36.11 36.11 0 0022.19 0l5.063 5.063A41.992 41.992 0 0164 106.489zM64 83.185a10.461 10.461 0 006.04-19.008l-4.321-22.815a1.75 1.75 0 00-3.438 0L57.96 64.177A10.461 10.461 0 0064 83.185zm-3.562-16.449a1.749 1.749 0 00.822-1.177L64 51.093l2.74 14.466a1.748 1.748 0 00.821 1.177 6.969 6.969 0 11-7.123 0z"></path>
                </svg>
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
                <svg
                    viewBox="0 0 512 512"
                    className="detail-icon"
                >
                    <path d="M510 14.131a9.791 9.791 0 00-9.879-9.486c-28.013.262-56.124 1.308-84.233 3.63-81.918 6.76-165.147 28.782-231.9 78.451-12.55-21.543-28.79-40.993-44.741-59.965-6.141-7.077-12.819-15.116-18.76-22.28-4.405-5.334-12.377-6.003-17.607-1.473-33.055 28.315-64.278 60.708-82.924 100.61-4.469 9.595-8.959 19.605-11.561 29.895-10.798 42.836 13.125 89.899 51.885 109.703-2.104 12.305-3.498 24.599-3.601 37.073-.46 35.427 10.908 68.762 22.943 101.381 2.406 6.52 5.067 13.608 7.576 20.499-12.782 11.881-41.493 38.548-45.07 41.895-8.416 8.226-25.289 24.411-34.052 32.807-19.251 19.745 9.233 47.884 28.746 28.746 0 0 20.104-21.014 20.103-21.015 18.758-19.403 37.747-38.849 56.814-58.328 8.413-1.624 15.903-8.264 16.967-17.327 43.158-44.057 86.503-88.278 128.337-132.58 26.221-27.912 54.177-56.445 79.487-85.066a1441.955 1441.955 0 0019.099-22.129c3.078-3.656 2.85-9.146-.645-12.506a9.152 9.152 0 00-12.95.265 1425.148 1425.148 0 01-20.193 20.587c-68.156 66.898-137.998 132.639-207.888 197.851-3.318-5.841-6.55-11.713-9.606-17.581-15.589-30.656-33.274-71.99-20.671-106.049a115.46 115.46 0 0023.145 2.067c36.566 1.588 71.9-19.593 88.797-51.863 13.693-25.731 10.701-56.49 1.376-82.797a160.172 160.172 0 00-4.479-11.635c31.005-23.755 66.862-40.593 104.072-52.313C357.825 36.57 419.824 32.377 481.7 32.523c-3.028 112.988-31.507 239.061-110.211 322.276C326 404.342 265.643 438.728 196.591 426.84c-13.705-2.491-18.991 17.625-5.736 22.201 22.275 7.985 46.423 10.354 69.935 8.02 77.74-7.427 141.329-65.057 182.328-128.141 50.699-82.714 64.149-181.632 67.115-276.798.091-12.477.224-25.567-.233-37.991zM174.236 197.122c-13.175 22.23-38.762 35.503-64.631 33.768-6.248-.114-12.515-.984-18.513-2.681-1.911-4.387-5.799-7.911-10.914-8.795a14.861 14.861 0 00-7.042.328 50.566 50.566 0 01-6.03-5.018c-19.016-18.839-26.928-49.329-18.325-74.734 13.385-36.726 36.119-68.841 62.306-97.606 25.969 26.587 51.851 54.406 65.062 89.313 8.1 20.822 11.03 45.995-1.913 65.425z"></path>
                </svg>
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