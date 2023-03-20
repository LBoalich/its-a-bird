import quizReducer, {
  saveAnswer,
  incrementQuestion,
} from './quizSlice';

describe('quiz reducer', () => {
  const initialState = {
    currentQuestion: 1,
    questions: {
      1: {
        question: "question1",
        choose: {
          1: "choice1.1",
          2: "choice1.2",
          3: "choice1.3",
          4: "choice1.4"
        }
      },
    },
    answers: {
      1: "",
      2: ""
    }
  };
  it('should handle initial state', () => {
    expect(quizReducer(undefined, { type: 'unknown' })).toEqual({
      currentQuestion: 1,
      questions: {
        1: {
          question: "question1",
          choose: {
            1: "choice1.1",
            2: "choice1.2",
            3: "choice1.3",
            4: "choice1.4"
          }
        },
        2: {
          question: "question2",
          choose: {
            1: "choice2.1",
            2: "choice2.2",
            3: "choice2.3",
            4: "choice2.4"
          }
        }
      },
      answers: {
        1: "",
        2: ""
      }
    });
  });

  it('should handle increment', () => {
    const actual = quizReducer(initialState, incrementQuestion());
    expect(actual.currentQuestion).toEqual(2);
  });

  it('should handle saveAnswer', () => {
    const actual = quizReducer(initialState, saveAnswer({questionNumber: 1, answer: 3}));
    expect(actual.answers[1]).toEqual(3);
  });
});
