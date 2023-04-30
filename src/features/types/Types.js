import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTypes } from "./typesSlice";
import "./Types.css";

export function Types() {
    const slugify = require("slugify");
    const types = useSelector(selectTypes);
    const typesArr = Object.entries(types);

    return (
        <section className="types-container">
            <picture 
                className="types-font-container"
            >
                <source 
                    srcSet={require("./typesPics/cockatoo-types-80.webp")} 
                    media="(min-width: 1601px)"
                    alt="feathered font reading 'Cockatoo Types'"
                />
                <source 
                    srcSet={require("./typesPics/cockatoo-types-60.webp")} 
                    media="(min-width: 1025px)"
                    alt="feathered font reading 'Cockatoo Types'"
                />
                <source 
                    srcSet={require("./typesPics/cockatoo-types-40.webp")} 
                    media="(min-width: 747px)"
                    alt="feathered font reading 'Cockatoo Types'" 
                />
                <source 
                    srcSet={require("./typesPics/cockatoo-types-20.webp")} 
                    media="(min-width: 0px)"
                    alt="feathered font reading 'Cockatoo Types'" 
                />
                <img 
                    src={require("./typesPics/cockatoo-types-40.webp")} 
                    alt="feathered font reading 'Cockatoo Types'" className="types-font-img"
                />
            </picture>

            {typesArr.map(type => {
                return <article className="type-container" key={type[0]}>
                            <h2>{type[0]}</h2>
                            <figure className="type-img-container" key={types[type[0]].alt}>
                                <img className="type-img" 
                                src={require(`${types[type[0]].img}`)} alt={types[type[0]].alt}
                                fetchpriority={type[0] === "Blue-eyed" ? "high" : "low"}
                            />
                            </figure>
                            <button className="learn-link-container">
                                <Link to={`/types/${slugify(type[0])}`} className="learn-link">Description</Link>
                            </button>
                        </article>
            })}
        </section>
    );
};
