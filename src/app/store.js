import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/quizSlice';
import resultsReducer from "../features/results/resultsSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    results: resultsReducer,
  },
});
