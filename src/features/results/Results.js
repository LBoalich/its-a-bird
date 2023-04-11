import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectResults, selectFinalAnswer } from './resultsSlice';

export function Results() {
    const dispatch = useDispatch();
    const results = useSelector(selectResults);
    const finalAnswer = useSelector(selectFinalAnswer);
    const finalResult = results[finalAnswer];

    return (
        <div>
            <h1>You are most like the {finalAnswer} Cockatoo!</h1>
            <img src={require(`${finalResult.img}`)} alt={finalResult.alt}/>
        </div>
    );
};