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
            <div className="types-font-container">
            <img src={require("./typesPics/cockatoo-types.png")} alt="feathered font reading 'Cockatoo Types'" className="types-font-img"/>
            </div>

            {typesArr.map(type => {
                return <article className="type-container" key={type[0]}>
                            <h2>{type[0]}</h2>
                            <figure className="type-img-container" key={types[type[0]].alt}>
                                <img className="type-img" src={require(`${types[type[0]].img}`)} alt={types[type[0]].alt}/>
                            </figure>
                            <button className="learn-link-container">
                                <Link to={`/types/${slugify(type[0])}`} className="learn-link">Learn More</Link>
                            </button>
                        </article>
            })}
        </section>
    );
};
