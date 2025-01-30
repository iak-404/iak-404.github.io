import React, {useEffect} from "react";
import uiIcon from '../assets/images/links/logo-uiverse-small.png';
import cpIcon from '../assets/images/links/codepen-logo-small.png';
import bwtIcon from '../assets/images/links/LogoBluewave_small.png';
import ghIcon from '../assets/images/links/github-mark-small.png';

const Sidebar = () => {
    useEffect(() => {
        function updateClock() {
            const now = new Date();

            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hoursAngle = (hours % 12) * 30 + minutes * 0.5;
            const minutesAngle = minutes * 6;
            const secondsAngle = seconds * 6;

        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (hoursElement) hoursElement.style.transform = `translate(-50%, -100%) rotate(${hoursAngle}deg)`;
        if (minutesElement) minutesElement.style.transform = `translate(-50%, -100%) rotate(${minutesAngle}deg)`;
        if (secondsElement) secondsElement.style.transform = `translate(-50%, -80%) rotate(${secondsAngle}deg)`;
        }

        const interval = setInterval(updateClock, 1000);
        updateClock(); // Initialer Aufruf

        return () => clearInterval(interval); // Cleanup bei unmount
    }, []);
    
    return (
        <div className="sidebar-container">
            <div className="clock">
                <div className="card">
                    <div className="numbers">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className="number"></span>
                    ))}
                    </div>
                    <div className="needles">
                        <span className="h" id="hours"></span>
                        <span className="m" id="minutes"></span>
                        <span className="s" id="seconds"></span>
                        <span className="center"></span>
                    </div>
                    <div className="pie"></div>
                </div>
            </div>
            <div className="links">
                <div className="links-headline">
                    <h2 className="links-headline-text">Links</h2>
                </div>
                <div className="link-list">
                    <ul className="link-ul">
                        <li className="link">
                            <a href="https://bluewave-tech.de/" target="_blank" rel="noreferrer"><img src={bwtIcon} alt="bluewave tech logo"></img></a>
                        </li>
                        <li className="link">
                            <a href="https://github.com/iak-404" target="_blank" rel="noreferrer"><img src={ghIcon} alt="github logo"></img></a>
                        </li>
                        <li className="link">
                            <a href="https://codepen.io/" target="_blank" rel="noreferrer"><img src={cpIcon} alt="codepen logo"></img></a>
                        </li>
                        <li className="link">
                            <a href="https://uiverse.io/" target="_blank" rel="noreferrer"><img src={uiIcon} alt="uiverse logo"></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;