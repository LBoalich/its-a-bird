import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectTypes } from "../descriptions/descriptionsSlice";
import "./NavBar.css";

const NavBar = () => {
    const types = useSelector(selectTypes);
    const [active, setActive] = useState(false);
    
    const ToggleClass = () => {
        setActive(!active);
    };

    return (
        <header>
            <nav className = "navbar">
                <div className={active ? "hamburger-active" : "hamburger"} onClick={ToggleClass}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={active ? "nav-menu-active" : "nav-menu"} onClick={ToggleClass}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => `linkStyle ${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
                            Home
                        </NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/types" className={({ isActive }) => `linkStyle ${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
                            Types
                        </NavLink> 
                    </li>
                </ul>
                <NavLink to="/" className="nav-branding">It's A Bird</NavLink>
            </nav>
        </header>
    )

};

export default NavBar;