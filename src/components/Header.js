import React, {useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import menuButton from '../assets/images/menuButton.svg'
import {openMenu} from '../utils/menu'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false); // Zustand für Menü öffnen/schließen
    const hamburgerIcon = useRef(null); // Referenz auf das Hamburger-Icon
    const responsiveNavigation = useRef(null); // Referenz auf das responsive Navigationsmenü

    useEffect(() => {
        // Sicherstellen, dass die Referenzen gesetzt sind, bevor auf sie zugegriffen wird
        if (hamburgerIcon.current && responsiveNavigation.current) {
            // Die Referenzen sind jetzt gesetzt und können verwendet werden
            console.log('Hamburger icon und responsive navigation sind gesetzt.');
        }
    }, [])

    // Handler für das Menü öffnen/schließen
    const handleMenuClick = () => {
        // Übergeben der Referenzen an die openMenu-Funktion
        if (hamburgerIcon.current && responsiveNavigation.current) {
            openMenu(hamburgerIcon, responsiveNavigation, menuIsOpen, setMenuIsOpen); // Übergabe von setMenuIsOpen an openMenu
        }
    };

    return (
        <header>
            <div className="header-wrapper">
                <div className="headline">
                    <h1 className="headline-text">Meine Website . . .</h1>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="">
                            <NavLink to="/"
                            className={({ isActive }) => (isActive ? "navitem-active" : "navitem")}>
                            Startseite
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/About"
                            className={({ isActive }) => (isActive ? "navitem-active" : "navitem")}>
                            Über mich
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/Projects"
                            className={({ isActive }) => (isActive ? "navitem-active" : "navitem")}>
                            Projekte
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="help-login">
                    help login
                </div>
                <div id="hamburger-container" onClick={handleMenuClick} className="hamburger-container">
                        <img ref={hamburgerIcon} id="hamburger-icon" src={menuButton} alt="menu_button" />
                </div>
                <nav id="responsive-navigation" ref={responsiveNavigation} className="responsive-navigation">
                    <ul>
                        <li className=""><NavLink className="nav-button" to="/">Startseite</NavLink></li>
                        <li className=""><NavLink className="nav-button" to="/About">Über mich</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;