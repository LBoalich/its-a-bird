import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
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
                        <NavLink to="/quiz" className={({ isActive }) => `linkStyle ${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
                            Quiz
                        </NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/result" className={({ isActive }) => `linkStyle ${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
                            Quiz Result
                        </NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/types" className={({ isActive }) => `linkStyle ${isActive ? "nav-link nav-link-active" : "nav-link"}`}>
                            Cockatoo Types
                        </NavLink> 
                    </li>
                </ul>
                <picture className="nav-branding">
                    <source 
                        srcSet={require("./its-a-bird-d.webp")} media="(min-width: 1025px)"
                        className="nav-img"
                    />
                    <source 
                        srcSet={require("./its-a-bird-m.webp")}
                        media="(min-width: 1px)"
                        className="nav-img"
                    />
                    <img 
                        src={require("./its-a-bird-d.webp")} alt="It's A Bird" className="nav-img"
                    />
                </picture>
            </nav>
        </header>
    )

};

export default NavBar;
