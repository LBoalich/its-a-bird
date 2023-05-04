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
                        srcSet={`${require("./resultsPics/cute80.webp")}, ${require("./resultsPics/cute.webp")} 1.5x 2x`}
                        media="(min-width: 1601px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./resultsPics/cute60.webp")}, ${require("./resultsPics/cute90.webp")} 1.5x, ${require("./resultsPics/cute.webp")} 2x`}
                        media="(min-width: 1025px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./resultsPics/cute40.webp")}, ${require("./resultsPics/cute60.webp")} 1.5x, ${require("./resultsPics/cute80.webp")} 2x`}
                        media="(min-width: 747px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./resultsPics/cute30.webp")}, ${require("./resultsPics/cute45.webp")} 1.5x, ${require("./resultsPics/cute60.webp")} 2x`}
                        media="(min-width: 481px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./resultsPics/cute20.webp")}, ${require("./resultsPics/cute30.webp")} 1.5x, ${require("./resultsPics/cute40.webp")} 2x`}
                        media="(min-width: 0px)"
                        fetchpriority="high"
                    />
                    <img src={require("./resultsPics/cute40.webp")} alt="Two cute multi-colored cartoon cockatoos" className="no-result-img" 
                    fetchpriority="high"/>
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
                    srcSet={`${require(`${finalResult.img80}`)}, ${require(`${finalResult.img}`)} 1.5x 2x`}
                    media="(min-width: 1601px)" 
                />
                <source 
                    srcSet={`${require(`${finalResult.img60}`)}, ${require(`${finalResult.img90}`)} 1.5x, ${require(`${finalResult.img}`)} 2x`}
                    media="(min-width: 1025px)"
                />
                <source 
                    srcSet={`${require(`${finalResult.img40}`)}, ${require(`${finalResult.img60}`)} 1.5x, ${require(`${finalResult.img80}`)}  2x`}
                    media="(min-width: 747px)"
                />
                <source 
                    srcSet={`${require(`${finalResult.img30}`)}, ${require(`${finalResult.img45}`)} 1.5x, ${require(`${finalResult.img60}`)}  2x`}
                    media="(min-width: 481px)"
                />
                <source 
                    srcSet={`${require(`${finalResult.img20}`)}, ${require(`${finalResult.img30}`)} 1.5x, ${require(`${finalResult.img40}`)}  2x`}
                    media="(min-width: 0px)"
                />
                <img 
                    className="result-img" 
                    src={require(`${finalResult.img40}`)} 
                    alt={finalResult.alt}
                    fetchpriority="high"
                />
            </picture>
            <div className="button-div">
                <button className="type-button" onClick={handleClick}>Learn More</button>
            </div>
        </section>
    );
};
