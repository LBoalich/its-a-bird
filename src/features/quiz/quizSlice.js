import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick A Color",
      choose: [
        {
          "img": "./quizPics/1/yellow.jpg",
          "alt": "Yellow",
          "answer": ["Sulphur Crested", "Cockatiel", "Yellow-tailed Black", "Umbrella"],
        },
        {
          "img": "./quizPics/1/blue.jpg",
          "alt": "Blue",
          "answer": ["Blue Eyed"],
        },
        {
          "img": "./quizPics/1/red.jpg",
          "alt": "Red",
          "answer": ["Palm", "Gang Gang", "Red-tailed Black"],
        },
        {
          "img": "./quizPics/1/pink.jpg",
          "alt": "Pink",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    2: {
      question: "Would You Rather Be A",
      choose: [
        {
          "img": "./quizPics/2/jockey.png",
          "alt": "Jockey",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/2/sumo.png",
          "alt": "Sumo Wrestler",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/2/gymnast.png",
          "alt": "Gymnast",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/2/comedian.jpg",
          "alt": "Comedian",
          "answer": ["Galah", "Gang Gang"],
        },
      ],
    },
    3: {
      question: "What Is Your Personality Most Like?",
      choose: [
        {
          "img": "./quizPics/3/shy.jpg",
          "alt": "Shy",
          "answer": ["Red-tailed Black"],
        },
        {
          "img": "./quizPics/3/loud.png",
          "alt": "Loud",
          "answer": ["Yellow-tailed Black", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/3/quiet.png",
          "alt": "Quiet",
          "answer": ["Gang Gang", "Galah"],
        },
        {
          "img": "./quizPics/3/friendly.png",
          "alt": "Friendly",
          "answer": ["Blue Eyed"],
        },
      ],
    },
    4: {
      question: "Which Gemstone Do You Like Best?",
      choose: [
        {
          "img": "./quizPics/4/blackOpal.png",
          "alt": "Black Opal",
          "answer": ["Palm", "Galah", "Blue Eyed", "Major Mitchell"],
        },
        {
          "img": "./quizPics/4/quartz.png",
          "alt": "Quartz",
          "answer": ["Umbrella", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/4/blueDiamond.png",
          "alt": "Blue Diamond",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/4/amethyst.png",
          "alt": "Amethyst",
          "answer": ["Cockatiel", "Gang Gang"],
        },
      ],
    },
    5: {
      question: "Would You Rather",
      choose: [
        {
          "img": "./quizPics/5/sing.jpg",
          "alt": "Sing",
          "answer": ["Cockatiel"],
        },
        {
          "img":  "./quizPics/5/dance.jpg",
          "alt": "Dance",
          "answer": ["Sulphur Crested"],
        },
        {
          "img":  "./quizPics/5/drum.jpg",
          "alt": "Drum",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/5/scream.png",
          "alt": "Scream",
          "answer": ["Major Mitchell"],
        },
      ],
    },
    6: {
      question: "What Is Your Style",
      choose: [
        {
          "img": "./quizPics/6/goth.jpg",
          "alt": "Goth",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/6/classic.jpg",
          "alt": "Classic",
          "answer": ["Umbrella", "Sulphur Crested", "Blue Eyed"],
        },
        {
          "img": "./quizPics/6/tuxedoSuit.jpg",
          "alt": "Tuxedo Suit",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/6/colorful.jpg",
          "alt": "Colorful",
          "answer": ["Major Mitchell", "Cockatiel", "Galah", "Gang Gang"],
        },
      ],
    },
    7: {
      question: "You Are Lost.  Which Direction Do You Take?",
      choose: [
        {
          "img": "./quizPics/7/north.png",
          "alt": "North",
          "answer": ["Red-tailed Black", "Palm", "Blue Eyed", "Umbrella"],
        },
        {
          "img": "./quizPics/7/east.png",
          "alt": "East",
          "answer": ["Yellow-tailed Black", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/7/south.png",
          "alt": "South",
          "answer": ["Gang Gang"],
        },
        {
          "img": "./quizPics/7/west.png",
          "alt": "West",
          "answer": ["Major Mitchell", "Cockatiel", "Galah"],
        },
      ],
    },
    8: {
      question: "Which Food Or Drink Do You Want?",
      choose: [
        {
          "img": "./quizPics/8/wine.png",
          "alt": "Wine",
          "answer": ["Gang Gang"],
        },
        {
          "img": "./quizPics/8/cheese.png",
          "alt": "Cheese",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/8/steak.png",
          "alt": "Steak",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/8/peanuts.png",
          "alt": "Peanuts",
          "answer": ["Red-tailed Black"],
        },
      ],
    },
    9: {
      question: "Pick A Number",
      choose: [
        {
          "img": "./quizPics/9/2.png",
          "alt": "2",
          "answer": ["Gang Gang", "Cockatiel"],
        },
        {
          "img": "./quizPics/9/4.png",
          "alt": "4",
          "answer": ["Palm", "Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/9/8.png",
          "alt": "8",
          "answer": ["Umbrella", "Blue Eyed", "Sulphur Crested"],
        },
        {
          "img": "./quizPics/9/5.png",
          "alt": "5",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    10: {
      question: "What Is The Pretiest Landscape",
      choose: [
        {
          "img": "./quizPics/10/forest.jpg",
          "alt": "Forest",
          "answer": ["Gang Gang", "Sulphur Crested", "Blue Eyed", "Yellow-tailed Black", "Major Mitchell"],
        },
        {
          "img": "./quizPics/10/field.jpg",
          "alt": "Field",
          "answer": ["Galah", "Cockatiel"],
        },
        {
          "img": "./quizPics/10/mangrove.jpg",
          "alt": "Grove",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/10/rainforest.jpg",
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
    },
    resetQuiz: (state) => {
      state.currentQuestion = 1;
      state.answers = {};
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { saveAnswer, incrementQuestion, resetQuiz } = quizSlice.actions;

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
