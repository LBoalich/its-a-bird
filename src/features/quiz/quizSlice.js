import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestion: 1,
  questions: {
    1: {
      question: "Pick a color:",
      choose: [
        {
          "imgXS": "./quizPics/1/XS/yellow.webp",
          "imgS": "./quizPics/1/S/yellow.webp",
          "imgM": "./quizPics/1/M/yellow.webp",
          "imgL": "./quizPics/1/L/yellow.webp",
          "alt": "Yellow",
          "answer": ["Sulphur-crested", "Cockatiel", "Yellow-tailed Black", "Umbrella"],
        },
        {
          "imgXS": "./quizPics/1/XS/blue.webp",
          "imgS": "./quizPics/1/S/blue.webp",
          "imgM": "./quizPics/1/M/blue.webp",
          "imgL": "./quizPics/1/L/blue.webp",
          "alt": "Blue",
          "answer": ["Blue-eyed"],
        },
        {
          "imgXS": "./quizPics/1/XS/red.webp",
          "imgS": "./quizPics/1/S/red.webp",
          "imgM": "./quizPics/1/M/red.webp",
          "imgL": "./quizPics/1/L/red.webp",
          "alt": "Red",
          "answer": ["Palm", "Gang-gang", "Red-tailed Black"],
        },
        {
          "imgXS": "./quizPics/1/XS/pink.webp",
          "imgS": "./quizPics/1/S/pink.webp",
          "imgM": "./quizPics/1/M/pink.webp",
          "imgL": "./quizPics/1/L/pink.webp",
          "alt": "Pink",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    2: {
      question: "Choose an occupation:",
      choose: [
        {
          "imgXS": "./quizPics/2/XS/jockey.webp",
          "imgS": "./quizPics/2/S/jockey.webp",
          "imgM": "./quizPics/2/M/jockey.webp",
          "imgL": "./quizPics/2/L/jockey.webp",
          "alt": "Jockey",
          "answer": ["Cockatiel"],
        },
        {
          "imgXS": "./quizPics/2/XS/sumo.webp",
          "imgS": "./quizPics/2/S/sumo.webp",
          "imgM": "./quizPics/2/M/sumo.webp",
          "imgL": "./quizPics/2/L/sumo.webp",
          "alt": "Sumo Wrestler",
          "answer": ["Palm"],
        },
        {
          "imgXS": "./quizPics/2/XS/gymnast.webp",
          "imgS": "./quizPics/2/S/gymnast.webp",
          "imgM": "./quizPics/2/M/gymnast.webp",
          "imgL": "./quizPics/2/L/gymnast.webp",
          "alt": "Gymnast",
          "answer": ["Umbrella"],
        },
        {
          "imgXS": "./quizPics/2/XS/comedian.webp",
          "imgS": "./quizPics/2/S/comedian.webp",
          "imgM": "./quizPics/2/M/comedian.webp",
          "imgL": "./quizPics/2/L/comedian.webp",
          "alt": "Comedian",
          "answer": ["Galah", "Gang-gang"],
        },
      ],
    },
    3: {
      question: "What is your personality?",
      choose: [
        {
          "imgXS": "./quizPics/3/XS/shy.webp",
          "imgS": "./quizPics/3/S/shy.webp",
          "imgM": "./quizPics/3/M/shy.webp",
          "imgL": "./quizPics/3/L/shy.webp",
          "alt": "Shy",
          "answer": ["Red-tailed Black"],
        },
        {
          "imgXS": "./quizPics/3/XS/loud.webp",
          "imgS": "./quizPics/3/S/loud.webp",
          "imgM": "./quizPics/3/M/loud.webp",
          "imgL": "./quizPics/3/L/loud.webp",
          "alt": "Loud",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "imgXS": "./quizPics/3/XS/quiet.webp",
          "imgS": "./quizPics/3/S/quiet.webp",
          "imgM": "./quizPics/3/M/quiet.webp",
          "imgL": "./quizPics/3/L/quiet.webp",
          "alt": "Quiet",
          "answer": ["Gang-gang", "Galah"],
        },
        {
          "imgXS": "./quizPics/3/XS/friendly.webp",
          "imgS": "./quizPics/3/S/friendly.webp",
          "imgM": "./quizPics/3/M/friendly.webp",
          "imgL": "./quizPics/3/L/friendly.webp",
          "alt": "Friendly",
          "answer": ["Blue-eyed"],
        },
      ],
    },
    4: {
      question: "Which gemstone do you like best?",
      choose: [
        {
          "imgXS": "./quizPics/4/XS/blackOpal.webp",
          "imgS": "./quizPics/4/S/blackOpal.webp",
          "imgM": "./quizPics/4/M/blackOpal.webp",
          "imgL": "./quizPics/4/L/blackOpal.webp",
          "alt": "Black Opal",
          "answer": ["Palm", "Galah", "Blue-eyed", "Major Mitchell"],
        },
        {
          "imgXS": "./quizPics/4/XS/quartz.webp",
          "imgS": "./quizPics/4/S/quartz.webp",
          "imgM": "./quizPics/4/M/quartz.webp",
          "imgL": "./quizPics/4/L/quartz.webp",
          "alt": "Quartz",
          "answer": ["Umbrella", "Sulphur-crested"],
        },
        {
          "imgXS": "./quizPics/4/XS/blueDiamond.webp",
          "imgS": "./quizPics/4/S/blueDiamond.webp",
          "imgM": "./quizPics/4/M/blueDiamond.webp",
          "imgL": "./quizPics/4/L/blueDiamond.webp",
          "alt": "Blue Diamond",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "imgXS": "./quizPics/4/XS/amethyst.webp",
          "imgS": "./quizPics/4/S/amethyst.webp",
          "imgM": "./quizPics/4/M/amethyst.webp",
          "imgL": "./quizPics/4/L/amethyst.webp",
          "alt": "Amethyst",
          "answer": ["Cockatiel", "Gang-gang"],
        },
      ],
    },
    5: {
      question: "What do you want to do for fun?",
      choose: [
        {
          "imgXS": "./quizPics/5/XS/sing.webp",
          "imgS": "./quizPics/5/S/sing.webp",
          "imgM": "./quizPics/5/M/sing.webp",
          "imgL": "./quizPics/5/L/sing.webp",
          "alt": "Sing",
          "answer": ["Cockatiel"],
        },
        {
          "imgXS":  "./quizPics/5/XS/dance.webp",
          "imgS":  "./quizPics/5/S/dance.webp",
          "imgM":  "./quizPics/5/M/dance.webp",
          "imgL":  "./quizPics/5/L/dance.webp",
          "alt": "Dance",
          "answer": ["Sulphur-crested"],
        },
        {
          "imgXS":  "./quizPics/5/XS/drum.webp",
          "imgS":  "./quizPics/5/S/drum.webp",
          "imgM":  "./quizPics/5/M/drum.webp",
          "imgL":  "./quizPics/5/L/drum.webp",
          "alt": "Drum",
          "answer": ["Palm"],
        },
        {
          "imgXS": "./quizPics/5/XS/scream.webp",
          "imgS": "./quizPics/5/S/scream.webp",
          "imgM": "./quizPics/5/M/scream.webp",
          "imgL": "./quizPics/5/L/scream.webp",
          "alt": "Scream",
          "answer": ["Major Mitchell"],
        },
      ],
    },
    6: {
      question: "What is your style?",
      choose: [
        {
          "imgXS": "./quizPics/6/XS/goth.webp",
          "imgS": "./quizPics/6/S/goth.webp",
          "imgM": "./quizPics/6/M/goth.webp",
          "imgL": "./quizPics/6/L/goth.webp",
          "alt": "Goth",
          "answer": ["Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "imgXS": "./quizPics/6/XS/classic.webp",
          "imgS": "./quizPics/6/S/classic.webp",
          "imgM": "./quizPics/6/M/classic.webp",
          "imgL": "./quizPics/6/L/classic.webp",
          "alt": "Classic",
          "answer": ["Umbrella", "Sulphur-crested", "Blue-eyed"],
        },
        {
          "imgXS": "./quizPics/6/XS/tuxedoSuit.webp",
          "imgS": "./quizPics/6/S/tuxedoSuit.webp",
          "imgM": "./quizPics/6/M/tuxedoSuit.webp",
          "imgL": "./quizPics/6/L/tuxedoSuit.webp",
          "alt": "Tuxedo Suit",
          "answer": ["Palm"],
        },
        {
          "imgXS": "./quizPics/6/XS/colorful.webp",
          "imgS": "./quizPics/6/S/colorful.webp",
          "imgM": "./quizPics/6/M/colorful.webp",
          "imgL": "./quizPics/6/L/colorful.webp",
          "alt": "Colorful",
          "answer": ["Major Mitchell", "Cockatiel", "Galah", "Gang-gang"],
        },
      ],
    },
    7: {
      question: "You are lost.  Which direction do you take?",
      choose: [
        {
          "imgXS": "./quizPics/7/XS/north.webp",
          "imgS": "./quizPics/7/S/north.webp",
          "imgM": "./quizPics/7/M/north.webp",
          "imgL": "./quizPics/7/L/north.webp",
          "alt": "North",
          "answer": ["Red-tailed Black", "Palm", "Blue-eyed", "Umbrella"],
        },
        {
          "imgXS": "./quizPics/7/XS/east.webp",
          "imgS": "./quizPics/7/S/east.webp",
          "imgM": "./quizPics/7/M/east.webp",
          "imgL": "./quizPics/7/L/east.webp",
          "alt": "East",
          "answer": ["Yellow-tailed Black", "Sulphur-crested"],
        },
        {
          "imgXS": "./quizPics/7/XS/south.webp",
          "imgS": "./quizPics/7/S/south.webp",
          "imgM": "./quizPics/7/M/south.webp",
          "imgL": "./quizPics/7/L/south.webp",
          "alt": "South",
          "answer": ["Gang-gang"],
        },
        {
          "imgXS": "./quizPics/7/XS/west.webp",
          "imgS": "./quizPics/7/S/west.webp",
          "imgM": "./quizPics/7/M/west.webp",
          "imgL": "./quizPics/7/L/west.webp",
          "alt": "West",
          "answer": ["Major Mitchell", "Cockatiel", "Galah"],
        },
      ],
    },
    8: {
      question: "Which food or drink do you want?",
      choose: [
        {
          "imgXS": "./quizPics/8/XS/wine.webp",
          "imgS": "./quizPics/8/S/wine.webp",
          "imgM": "./quizPics/8/M/wine.webp",
          "imgL": "./quizPics/8/L/wine.webp",
          "alt": "Wine",
          "answer": ["Gang-gang"],
        },
        {
          "imgXS": "./quizPics/8/XS/cheese.webp",
          "imgS": "./quizPics/8/S/cheese.webp",
          "imgM": "./quizPics/8/M/cheese.webp",
          "imgL": "./quizPics/8/L/cheese.webp",
          "alt": "Cheese",
          "answer": ["Cockatiel"],
        },
        {
          "imgXS": "./quizPics/8/XS/steak.webp",
          "imgS": "./quizPics/8/S/steak.webp",
          "imgM": "./quizPics/8/M/steak.webp",
          "imgL": "./quizPics/8/L/steak.webp",
          "alt": "Steak",
          "answer": ["Umbrella"],
        },
        {
          "imgXS": "./quizPics/8/XS/peanuts.webp",
          "imgS": "./quizPics/8/S/peanuts.webp",
          "imgM": "./quizPics/8/M/peanuts.webp",
          "imgL": "./quizPics/8/L/peanuts.webp",
          "alt": "Peanuts",
          "answer": ["Red-tailed Black"],
        },
      ],
    },
    9: {
      question: "Pick a number:",
      choose: [
        {
          "imgXS": "./quizPics/9/XS/2.webp",
          "imgS": "./quizPics/9/S/2.webp",
          "imgM": "./quizPics/9/M/2.webp",
          "imgL": "./quizPics/9/L/2.webp",
          "alt": "2",
          "answer": ["Gang-gang", "Cockatiel"],
        },
        {
          "imgXS": "./quizPics/9/XS/4.webp",
          "imgS": "./quizPics/9/S/4.webp",
          "imgM": "./quizPics/9/M/4.webp",
          "imgL": "./quizPics/9/L/4.webp",
          "alt": "4",
          "answer": ["Palm", "Red-tailed Black", "Yellow-tailed Black"],
        },
        {
          "imgXS": "./quizPics/9/XS/8.webp",
          "imgS": "./quizPics/9/S/8.webp",
          "imgM": "./quizPics/9/M/8.webp",
          "imgL": "./quizPics/9/L/8.webp",
          "alt": "8",
          "answer": ["Umbrella", "Blue-eyed", "Sulphur-crested"],
        },
        {
          "imgXS": "./quizPics/9/XS/5.webp",
          "imgS": "./quizPics/9/S/5.webp",
          "imgM": "./quizPics/9/M/5.webp",
          "imgL": "./quizPics/9/L/5.webp",
          "alt": "5",
          "answer": ["Major Mitchell", "Galah"],
        },
      ],
    },
    10: {
      question: "What is the prettiest landscape?",
      choose: [
        {
          "imgXS": "./quizPics/10/XS/forest.webp",
          "imgS": "./quizPics/10/S/forest.webp",
          "imgM": "./quizPics/10/M/forest.webp",
          "imgL": "./quizPics/10/L/forest.webp",
          "alt": "Forest",
          "answer": ["Gang-gang", "Sulphur-crested", "Blue-eyed", "Yellow-tailed Black", "Major Mitchell"],
        },
        {
          "imgXS": "./quizPics/10/XS/field.webp",
          "imgS": "./quizPics/10/S/field.webp",
          "imgM": "./quizPics/10/M/field.webp",
          "imgL": "./quizPics/10/L/field.webp",
          "alt": "Field",
          "answer": ["Galah", "Cockatiel"],
        },
        {
          "imgXS": "./quizPics/10/XS/mangrove.webp",
          "imgS": "./quizPics/10/S/mangrove.webp",
          "imgM": "./quizPics/10/M/mangrove.webp",
          "imgL": "./quizPics/10/L/mangrove.webp",
          "alt": "Grove",
          "answer": ["Umbrella"],
        },
        {
          "imgXS": "./quizPics/10/XS/rainforest.webp",
          "imgS": "./quizPics/10/S/rainforest.webp",
          "imgM": "./quizPics/10/M/rainforest.webp",
          "imgL": "./quizPics/10/L/rainforest.webp",
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
