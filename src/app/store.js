import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/quizSlice';
import resultsReducer from "../features/results/resultsSlice";
import descriptionsReducer from "../features/descriptions/descriptionsSlice";
import typesReducer from "../features/types/typesSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    results: resultsReducer,
    descriptions: descriptionsReducer,
    types: typesReducer,
  },
});
