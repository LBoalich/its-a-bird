import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick A Color",
      choose: [
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Red",
          "answer": ["Palm", "Gang Gang", "Red-tailed Black"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Yellow",
          "answer": ["Sulphur Crested", "Cockatiel", "Yellow-tailed Black", "Umbrella"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Blue",
          "answer": ["Blue Eyed"],
        },
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Pink",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    2: {
      question: "Would You Rather Be A",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Jockey",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Sumo Wrestler",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Gymnast",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Comedian",
          "answer": ["Galah", "Gang Gang"],
        },
      ],
    },
    3: {
      question: "What Is Your Personality Most Like?",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Shy",
          "answer": ["Red-tailed Black"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Loud",
          "answer": ["Yellow-tailed Black", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Quiet",
          "answer": ["Gang Gang", "Galah"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Friendly",
          "answer": ["Blue Eyed"],
        },
      ],
    },
    4: {
      question: "Which Gemstone Do You Like Best?",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Black Opal",
          "answer": ["Palm", "Galah", "Blue Eyed", "Major Mitchell"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Quartz",
          "answer": ["Umbrella", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Blue Diamond",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Amethyst",
          "answer": ["Cockatiel", "Gang Gang"],
        },
      ],
    },
    5: {
      question: "Would You Rather",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Sing",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Dance",
          "answer": ["Sulphur Crested"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Drum",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Scream",
          "answer": ["Major Mitchell"],
        },
      ],
    },
    6: {
      question: "What Is Your Style",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Goth",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Tuxedo Suit",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Classic",
          "answer": ["Umbrella", "Sulphur Crested", "Blue Eyed"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Colorful",
          "answer": ["Major Mitchell", "Cockatiel", "Galah", "Gang Gang"],
        },
      ],
    },
    7: {
      question: "You Are Lost.  Which Direction Do You Take?",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "North",
          "answer": ["Red-tailed Black", "Palm", "Blue Eyed", "Umbrella"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "East",
          "answer": ["Yellow-tailed Black", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "South",
          "answer": ["Gang Gang"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "West",
          "answer": ["Major Mitchell", "Cockatiel", "Galah"],
        },
      ],
    },
    8: {
      question: "Which Food Or Drink Do You Want?",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Wine",
          "answer": ["Gang Gang"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Cheese",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Steak",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Peanuts",
          "answer": ["Red-tailed Black"],
        },
      ],
    },
    9: {
      question: "Pick A Number",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "2",
          "answer": ["Gang Gang", "Cockatiel"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "4",
          "answer": ["Palm", "Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "8",
          "answer": ["Umbrella", "Blue Eyed", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "5",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    10: {
      question: "What Is The Pretiest Landscape",
      choose: [
        {
          "img": "./quizPics/red_tailed_black.jpg",
          "alt": "Forest",
          "answer": ["Gang Gang", "Sulphur Crested", "Blue Eyed", "Yellow-tailed Black", "Major Mitchell"],
        },
        {
          "img": "./quizPics/citron_crested.jpg",
          "alt": "Field",
          "answer": ["Galah", "Cockatiel"],
        },
        {
          "img": "./quizPics/galah2.jpg",
          "alt": "Grove",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/major_mitchell.jpg",
          "alt": "Rainforest",
          "answer": ["Palm", "Red-tailed Black"],
        },
      ],
    },
  },
  answers: {},
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
