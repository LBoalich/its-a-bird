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
                <figure className="no-result-img-container">
                    <img src={require("./resultsPics/cute.jpg")} alt="Two cute multi-colored cartoon cockatoos" className="no-result-img" />
                </figure>
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
            <figure className="result-img-container" key={finalResult.alt}>
                <img className="result-img" src={require(`${finalResult.img}`)} alt={finalResult.alt}/>
            </figure>
            <div className="button-div">
                <button className="type-button" onClick={handleClick}>Learn More</button>
            </div>
        </section>
    );
};
