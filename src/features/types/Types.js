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
                    srcSet={require("./typesFont/cockatoo-types-80.webp")} 
                    media="(min-width: 1601px)"
                    alt="feathered font reading 'Cockatoo Types'"
                />
                <source 
                    srcSet={require("./typesFont/cockatoo-types-60.webp")} 
                    media="(min-width: 1025px)"
                    alt="feathered font reading 'Cockatoo Types'"
                />
                <source 
                    srcSet={require("./typesFont/cockatoo-types-40.webp")} 
                    media="(min-width: 747px)"
                    alt="feathered font reading 'Cockatoo Types'" 
                />
                <source 
                    srcSet={require("./typesFont/cockatoo-types-20.webp")} 
                    media="(min-width: 0px)"
                    alt="feathered font reading 'Cockatoo Types'" 
                />
                <img 
                    src={require("./typesFont/cockatoo-types-40.webp")} 
                    alt="feathered font reading 'Cockatoo Types'" className="types-font-img"
                />
            </picture>

            {typesArr.map(type => {
                return <article className="type-container" key={type[0]}>
                            <h2>{type[0]}</h2>
                            <picture
                                className="type-img-container" 
                            >
                                <source 
                                    media="(min-width: 1600px)"
                                    srcSet={`${require(`${types[type[0]].imgM}`)}, ${require(`${types[type[0]].imgL}`)} 2x`}
                                />
                                <source 
                                    media="(min-width: 768px)"
                                    srcSet={`${require(`${types[type[0]].imgS}`)}, ${require(`${types[type[0]].imgM}`)} 2x`}
                                />
                                <source 
                                    media="(min-width: 0px)"
                                    srcSet={`${require(`${types[type[0]].imgXS}`)}, ${require(`${types[type[0]].imgS}`)} 2x`}
                                />
                                <img className="type-img"
                                src={require(`${types[type[0]].imgS}`)} 
                                alt={types[type[0]].alt}
                                fetchpriority={type[0] === "Blue-eyed" ? "high" : "low"}
                            />
                            </picture>
                            <button className="learn-link-container">
                                <Link to={`/types/${slugify(type[0])}`} className="learn-link">Description</Link>
                            </button>
                        </article>
            })}
        </section>
    );
};
