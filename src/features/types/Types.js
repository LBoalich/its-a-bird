import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectResults } from "../results/resultsSlice";

export function Types() {
    const slugify = require("slugify");
    const types = useSelector(selectResults);
    const typesArr = Object.entries(types);

    return (
        <section className="types-container">
            <h1>Cockatoo Types</h1>
            {typesArr.map(type => {
                return <article className="type-container">
                            <Link to={`/types/${slugify(type[0])}`}>{type[0]}</Link>
                            <img src={require(`../results${types[type[0]].img}`)}/>
                        </article>
            })}
        </section>
    );
};