import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick a color:",
      choose: [
        {
          "img": "./quizPics/1/yellow.webp",
          "alt": "Yellow",
          "answer": ["Sulphur-crested", "Cockatiel", "Yellow-tailed Black", "Umbrella"],
        },
        {
          "img": "./quizPics/1/blue.webp",
          "alt": "Blue",
          "answer": ["Blue-eyed"],
        },
        {
          "img": "./quizPics/1/red.webp",
          "alt": "Red",
          "answer": ["Palm", "Gang-gang", "Red-tailed Black"],
        },
        {
          "img": "./quizPics/1/pink.webp",
          "alt": "Pink",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    2: {
      question: "Choose an occupation:",
      choose: [
        {
          "img": "./quizPics/2/jockey.webp",
          "alt": "Jockey",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/2/sumo.webp",
          "alt": "Sumo Wrestler",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/2/gymnast.webp",
          "alt": "Gymnast",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/2/comedian.webp",
          "alt": "Comedian",
          "answer": ["Galah", "Gang-gang"],
        },
      ],
    },
    3: {
      question: "What is your personality?",
      choose: [
        {
          "img": "./quizPics/3/shy.webp",
          "alt": "Shy",
          "answer": ["Red-tailed Black"],
        },
        {
          "img": "./quizPics/3/loud.webp",
          "alt": "Loud",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/3/quiet.webp",
          "alt": "Quiet",
          "answer": ["Gang-gang", "Galah"],
        },
        {
          "img": "./quizPics/3/friendly.webp",
          "alt": "Friendly",
          "answer": ["Blue-eyed"],
        },
      ],
    },
    4: {
      question: "Which gemstone do you like best?",
      choose: [
        {
          "img": "./quizPics/4/blackOpal.webp",
          "alt": "Black Opal",
          "answer": ["Palm", "Galah", "Blue-eyed", "Major Mitchell"],
        },
        {
          "img": "./quizPics/4/quartz.webp",
          "alt": "Quartz",
          "answer": ["Umbrella", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/4/blueDiamond.webp",
          "alt": "Blue Diamond",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/4/amethyst.webp",
          "alt": "Amethyst",
          "answer": ["Cockatiel", "Gang-gang"],
        },
      ],
    },
    5: {
      question: "What do you want to do for fun?",
      choose: [
        {
          "img": "./quizPics/5/sing.webp",
          "alt": "Sing",
          "answer": ["Cockatiel"],
        },
        {
          "img":  "./quizPics/5/dance.webp",
          "alt": "Dance",
          "answer": ["Sulphur-crested"],
        },
        {
          "img":  "./quizPics/5/drum.webp",
          "alt": "Drum",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/5/scream.webp",
          "alt": "Scream",
          "answer": ["Major Mitchell"],
        },
      ],
    },
    6: {
      question: "What is your style?",
      choose: [
        {
          "img": "./quizPics/6/goth.webp",
          "alt": "Goth",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/6/classic.webp",
          "alt": "Classic",
          "answer": ["Umbrella", "Sulphur-crested", "Blue-eyed"],
        },
        {
          "img": "./quizPics/6/tuxedoSuit.webp",
          "alt": "Tuxedo Suit",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/6/colorful.webp",
          "alt": "Colorful",
          "answer": ["Major Mitchell", "Cockatiel", "Galah", "Gang-gang"],
        },
      ],
    },
    7: {
      question: "You are lost.  Which direction do you take?",
      choose: [
        {
          "img": "./quizPics/7/north.webp",
          "alt": "North",
          "answer": ["Red-tailed Black", "Palm", "Blue-eyed", "Umbrella"],
        },
        {
          "img": "./quizPics/7/east.webp",
          "alt": "East",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/7/south.webp",
          "alt": "South",
          "answer": ["Gang-gang"],
        },
        {
          "img": "./quizPics/7/west.webp",
          "alt": "West",
          "answer": ["Major Mitchell", "Cockatiel", "Galah"],
        },
      ],
    },
    8: {
      question: "Which food or drink do you want?",
      choose: [
        {
          "img": "./quizPics/8/wine.webp",
          "alt": "Wine",
          "answer": ["Gang-gang"],
        },
        {
          "img": "./quizPics/8/cheese.webp",
          "alt": "Cheese",
          "answer": ["Cockatiel"],
        },
        {
          "img": "./quizPics/8/steak.webp",
          "alt": "Steak",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/8/peanuts.webp",
          "alt": "Peanuts",
          "answer": ["Red-tailed Black"],
        },
      ],
    },
    9: {
      question: "Pick a number:",
      choose: [
        {
          "img": "./quizPics/9/2.webp",
          "alt": "2",
          "answer": ["Gang-gang", "Cockatiel"],
        },
        {
          "img": "./quizPics/9/4.webp",
          "alt": "4",
          "answer": ["Palm", "Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/9/8.webp",
          "alt": "8",
          "answer": ["Umbrella", "Blue-eyed", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/9/5.webp",
          "alt": "5",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    10: {
      question: "What is the prettiest landscape?",
      choose: [
        {
          "img": "./quizPics/10/forest.webp",
          "alt": "Forest",
          "answer": ["Gang-gang", "Sulphur-crested", "Blue-eyed", "Yellow-tailed Black", "Major Mitchell"],
        },
        {
          "img": "./quizPics/10/field.webp",
          "alt": "Field",
          "answer": ["Galah", "Cockatiel"],
        },
        {
          "img": "./quizPics/10/mangrove.webp",
          "alt": "Grove",
          "answer": ["Umbrella"],
        },
        {
          "img": "./quizPics/10/rainforest.webp",
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
});

export const { saveAnswer, incrementQuestion, resetQuiz } = quizSlice.actions;

export const selectQuizQuestions = (state) => state.quiz.questions;
export const selectQuizAnswers = (state) => state.quiz.answers;
export const selectQuizCurrentQuestion = (state) => state.quiz.currentQuestion;

export default quizSlice.reducer;
