import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick A Color",
      choose: {
        1: "./quizPics/citron_crested.jpg",
        2: "choice1.2",
        3: "choice1.3",
        4: "choice1.4"
      },
      clickValues: {
        1: "citron",
        2: "click1.2",
        3: "click1.3",
        4: "click1.4"
      }
    },
    2: {
      question: "question2",
      choose: {
        1: "./quizPics/red_tailed_black.jpg",
        2: "choice2.2",
        3: "choice2.3",
        4: "choice2.4"
      },
      clickValues: {
        1: "click2.1",
        2: "click2.2",
        3: "click2.3",
        4: "click2.4"
      }
    }
  },
  answers: {
    1: "",
    2: ""
  }
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    saveAnswer: (state, action) => {
      state.answers[action.payload.questionNumber] = action.payload.answer;
    },
    incrementQuestion: (state) => {
      state.currentQuestion += 1;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { saveAnswer, incrementQuestion } = quizSlice.actions;

export const selectQuizQuestions = (state) => state.quiz.questions;
export const selectQuizAnswers = (state) => state.quiz.answers;
export const selectQuizCurrentQuestion = (state) => state.quiz.currentQuestion;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = () => (dispatch, getState) => {
  const currentValue = selectQuizCurrentQuestion(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementQuestion());
  };
};

export default quizSlice.reducer;
