import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick a color:",
      choose: [
        {
          "img": "./quizPics/1/yellow.jpg",
          "alt": "Yellow",
          "answer": ["Sulphur-crested", "Cockatiel", "Yellow-tailed Black", "Umbrella"],
        },
        {
          "img": "./quizPics/1/blue.jpg",
          "alt": "Blue",
          "answer": ["Blue-eyed"],
        },
        {
          "img": "./quizPics/1/red.jpg",
          "alt": "Red",
          "answer": ["Palm", "Gang-gang", "Red-tailed Black"],
        },
        {
          "img": "./quizPics/1/pink.jpg",
          "alt": "Pink",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    2: {
      question: "Choose an occupation:",
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
          "answer": ["Galah", "Gang-gang"],
        },
      ],
    },
    3: {
      question: "What is your personality?",
      choose: [
        {
          "img": "./quizPics/3/shy.jpg",
          "alt": "Shy",
          "answer": ["Red-tailed Black"],
        },
        {
          "img": "./quizPics/3/loud.png",
          "alt": "Loud",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/3/quiet.png",
          "alt": "Quiet",
          "answer": ["Gang-gang", "Galah"],
        },
        {
          "img": "./quizPics/3/friendly.png",
          "alt": "Friendly",
          "answer": ["Blue-eyed"],
        },
      ],
    },
    4: {
      question: "Which gemstone do you like best?",
      choose: [
        {
          "img": "./quizPics/4/blackOpal.png",
          "alt": "Black Opal",
          "answer": ["Palm", "Galah", "Blue-eyed", "Major Mitchell"],
        },
        {
          "img": "./quizPics/4/quartz.png",
          "alt": "Quartz",
          "answer": ["Umbrella", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/4/blueDiamond.png",
          "alt": "Blue Diamond",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/4/amethyst.png",
          "alt": "Amethyst",
          "answer": ["Cockatiel", "Gang-gang"],
        },
      ],
    },
    5: {
      question: "What do you want to do for fun?",
      choose: [
        {
          "img": "./quizPics/5/sing.jpg",
          "alt": "Sing",
          "answer": ["Cockatiel"],
        },
        {
          "img":  "./quizPics/5/dance.jpg",
          "alt": "Dance",
          "answer": ["Sulphur-crested"],
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
      question: "What is your style?",
      choose: [
        {
          "img": "./quizPics/6/goth.jpg",
          "alt": "Goth",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/6/classic.jpg",
          "alt": "Classic",
          "answer": ["Umbrella", "Sulphur-crested", "Blue-eyed"],
        },
        {
          "img": "./quizPics/6/tuxedoSuit.jpg",
          "alt": "Tuxedo Suit",
          "answer": ["Palm"],
        },
        {
          "img": "./quizPics/6/colorful.jpg",
          "alt": "Colorful",
          "answer": ["Major Mitchell", "Cockatiel", "Galah", "Gang-gang"],
        },
      ],
    },
    7: {
      question: "You are lost.  Which direction do you take?",
      choose: [
        {
          "img": "./quizPics/7/north.png",
          "alt": "North",
          "answer": ["Red-tailed Black", "Palm", "Blue-eyed", "Umbrella"],
        },
        {
          "img": "./quizPics/7/east.png",
          "alt": "East",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/7/south.png",
          "alt": "South",
          "answer": ["Gang-gang"],
        },
        {
          "img": "./quizPics/7/west.png",
          "alt": "West",
          "answer": ["Major Mitchell", "Cockatiel", "Galah"],
        },
      ],
    },
    8: {
      question: "Which food or drink do you want?",
      choose: [
        {
          "img": "./quizPics/8/wine.png",
          "alt": "Wine",
          "answer": ["Gang-gang"],
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
      question: "Pick a number:",
      choose: [
        {
          "img": "./quizPics/9/2.png",
          "alt": "2",
          "answer": ["Gang-gang", "Cockatiel"],
        },
        {
          "img": "./quizPics/9/4.png",
          "alt": "4",
          "answer": ["Palm", "Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "img": "./quizPics/9/8.png",
          "alt": "8",
          "answer": ["Umbrella", "Blue-eyed", "Sulphur-crested"],
        },
        {
          "img": "./quizPics/9/5.png",
          "alt": "5",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    10: {
      question: "What is the prettiest landscape?",
      choose: [
        {
          "img": "./quizPics/10/forest.jpg",
          "alt": "Forest",
          "answer": ["Gang-gang", "Sulphur-crested", "Blue-eyed", "Yellow-tailed Black", "Major Mitchell"],
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
});

export const { saveAnswer, incrementQuestion, resetQuiz } = quizSlice.actions;

export const selectQuizQuestions = (state) => state.quiz.questions;
export const selectQuizAnswers = (state) => state.quiz.answers;
export const selectQuizCurrentQuestion = (state) => state.quiz.currentQuestion;

export default quizSlice.reducer;
