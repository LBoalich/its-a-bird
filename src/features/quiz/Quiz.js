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
    if (currentQuestionNum < 10) {
      dispatch(saveAnswer({questionNumber: currentQuestionNum, answer: answer}));
      dispatch(incrementQuestion());
    };
  };

  const quizResult = () => {
    const allAnswers = [];
    const counts = {};
    let finalAnswer = "";

    //consolidate answers to single array
    Object.values(quizAnswers).map(answer => {
      answer.forEach(bird => {
        allAnswers.push(bird);
      });
    });
    //set intitial counts to 0
    const uniq = [...new Set(allAnswers)];
    uniq.forEach(bird => {
      counts[bird] = 0;
    });
    //count how many times each bird as picked
    allAnswers.forEach(bird => {
      counts[bird] += 1;
    });

    const maxCount = Math.max(...Object.values(counts));
    const topAnswers = Object.keys(counts).filter(bird => counts[bird] === maxCount);
    //if tie pick random top answer
    if (topAnswers.length === 1) {
      finalAnswer = topAnswers[0];
    } else {
      const randomIndex = Math.floor(Math.random() * topAnswers.length);
      finalAnswer = topAnswers[randomIndex];
    }

    return finalAnswer;
  };

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
