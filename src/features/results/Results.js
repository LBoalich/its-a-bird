import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectResults, selectFinalAnswer } from './resultsSlice';

export function Results() {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);
    const finalAnswer = useSelector(selectFinalAnswer);

    const testAnswer = "Blue Eyed";
    const finalResult = results[testAnswer];

    return (
        <div>
            <h1>You are most like the {testAnswer} Cockatoo!</h1>
            <img src={require(`${finalResult.img}`)} alt={finalResult.alt}/>
        </div>
    );
};