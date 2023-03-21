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
  const currentClickValues = quizQuestions[currentQuestionNum].clickValues;

  const choice1 = currentChoices[1];
  const clickValue1 = currentClickValues[1];

  const handleClick = (answer) => {
    dispatch(saveAnswer({questionNumber: currentQuestionNum, answer: answer}));
    dispatch(incrementQuestion());
  }

  return (
    <section className="quizContainer">
      <h1>{quizQuestions[currentQuestionNum].question}</h1>
      <div className="answerContainer">
        <figure className="answerChoice">
          <img src={require(`${choice1}`)} onClick={() => handleClick(clickValue1)}/>
        </figure>
        <figure className="answerChoice">
          <img src={require("./quizPics/major_mitchell.jpg")}/>
        </figure>
        <figure className="answerChoice">
          <img src={require("./quizPics/pink_and_grey2.jpg")}/>
        </figure>
        <figure className="answerChoice">
          <img src={require("./quizPics/red_tailed_black.jpg")}/>
        </figure>
      </div>
    </section>
  );
}
