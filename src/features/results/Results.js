import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectResults, selectFinalAnswer } from './resultsSlice';

export function Results() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const slugify = require('slugify');
    const results = useSelector(selectResults);
    const finalAnswer = useSelector(selectFinalAnswer);
    const finalResult = results[finalAnswer];

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/types/${slugify(finalAnswer)}`)
    };

    return (
        <div>
            <h1>You are most like the {finalAnswer} Cockatoo!</h1>
            <img src={require(`.${finalResult.img}`)} alt={finalResult.alt}/>
            <button onClick={handleClick}>Learn More</button>
        </div>
    );
};