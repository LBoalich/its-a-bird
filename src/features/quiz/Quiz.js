import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveAnswer,
  incrementQuestion,
  selectQuizAnswers,
  selectQuizCurrentQuestion,
  selectQuizQuestions
} from './quizSlice';
import './Quiz.css';

export function Quiz() {
  const dispatch = useDispatch();
  const currentQuestionNum = useSelector(selectQuizCurrentQuestion);
  const quizQuestions = useSelector(selectQuizQuestions);
  const quizAnswers = useSelector(selectQuizAnswers); 

  const currentChoices = quizQuestions[currentQuestionNum].choose;

  const handleClick = (answer) => {
    dispatch(saveAnswer({questionNumber: currentQuestionNum, answer: answer}));
    dispatch(incrementQuestion());
  }

  return (
    <section className="quizContainer">
      <h1>{quizQuestions[currentQuestionNum].question}</h1>
      <div className="answerContainer">
        {currentChoices.map(choice => {
          return <figure className="answerChoice" key={choice.alt}>
                  <img src={require(`${choice.img}`)} alt={choice.alt} onClick={() => handleClick(choice.answer)}/>
                </figure>
        })}
      </div>
    </section>
  );
}
