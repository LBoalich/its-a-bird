import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { selectResults, selectFinalAnswer } from './resultsSlice';
import "./Results.css";

export function Results() {
    const navigate = useNavigate();
    const slugify = require('slugify');
    const results = useSelector(selectResults);
    const finalAnswer = useSelector(selectFinalAnswer);
    const finalResult = results[finalAnswer];

    if (finalAnswer === "") {
        return (
            <section className="no-result-container">
                <h1>Want to know which cockatoo you are most like?</h1>
                <picture className="no-result-img-container">
                    <source 
                        srcSet={require("./resultsPics/cute80.webp")}
                        media="(min-width: 1601px)" 
                    />
                    <source 
                        srcSet={require("./resultsPics/cute60.webp")}
                        media="(min-width: 1025px)"
                    />
                    <source 
                        srcSet={require("./resultsPics/cute40.webp")}
                        media="(min-width: 747px)"
                    />
                    <source 
                        srcSet={require("./resultsPics/cute30.webp")}
                        media="(min-width: 0px)"
                    />
                    <img src={require("./resultsPics/cute30.webp")} alt="Two cute multi-colored cartoon cockatoos" className="no-result-img" />
                </picture>
                <h2>Take the <Link to="/quiz" className="no-result-link">QUIZ</Link> now to see your result!</h2>
            </section>
        )
    };
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/types/${slugify(finalAnswer)}`)
    };

    return (
        <section className="result-container">
            <h1>You are most like the {finalAnswer} Cockatoo!</h1>
            <picture className="result-img-container">
                <source 
                    srcSet={require(`${finalResult.img80}`)}
                    media="(min-width: 1601px)" 
                />
                <source 
                    srcSet={require(`${finalResult.img60}`)}
                    media="(min-width: 1025px)"
                />
                <source 
                    srcSet={require(`${finalResult.img40}`)}
                    media="(min-width: 747px)"
                />
                <source 
                    srcSet={require(`${finalResult.img30}`)}
                    media="(min-width: 0px)"
                />
                <img className="result-img" src={require(`${finalResult.img40}`)} alt={finalResult.alt}/>
            </picture>
            <div className="button-div">
                <button className="type-button" onClick={handleClick}>Learn More</button>
            </div>
        </section>
    );
};
