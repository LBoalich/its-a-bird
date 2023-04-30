import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    
    const ToggleClass = () => {
        setActive(!active);
    };

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
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
                <picture className="nav-branding"
                onClick={handleClick}
                >
                    <source 
                        srcSet={require("./navBarPics/its-a-bird-80.webp")} media="(min-width: 1601px)"
                        className="nav-img"
                        alt="feathered font reading 'It's A Bird'" 
                    />
                    <source 
                        srcSet={require("./navBarPics/its-a-bird-60.webp")} media="(min-width: 1025px)"
                        className="nav-img"
                        alt="feathered font reading 'It's A Bird'" 
                    />
                    <source 
                        srcSet={require("./navBarPics/its-a-bird-40.webp")} media="(min-width: 747px)"
                        className="nav-img"
                        alt="feathered font reading 'It's A Bird'" 
                    />
                    <source 
                        srcSet={require("./navBarPics/its-a-bird-20.webp")} media="(min-width: 481px)"
                        className="nav-img"
                        alt="feathered font reading 'It's A Bird'" 
                    />
                    <source 
                        srcSet={require("./navBarPics/its-a-bird-10.webp")}
                        media="(min-width: 0px)"
                        className="nav-img"
                        alt="feathered font reading 'It's A Bird'" 
                    />
                    <img 
                        src={require("./navBarPics/its-a-bird-40.webp")} alt="feathered font reading 'It's A Bird'" className="nav-img"
                    />
                </picture>
            </nav>
        </header>
    )

};

export default NavBar;
