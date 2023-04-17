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
            <h1>Cockatoo Types</h1>
            {typesArr.map(type => {
                return <article className="type-container" key={type[0]}>
                            <h2>{type[0]}</h2>
                            <figure className="type-img-container" key={types[type[0]].alt}>
                                <img className="type-img" src={require(`${types[type[0]].img}`)} alt={types[type[0]].alt}/>
                            </figure>
                            <div className="learn-link-container">
                                <Link to={`/types/${slugify(type[0])}`} className="learn-link">Learn More</Link>
                            </div>
                        </article>
            })}
        </section>
    );
};