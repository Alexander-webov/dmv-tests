import { createContext, useContext, useReducer, useEffect } from "react";
import getQuestionsForCar from "../services/getQuestionsForCar";
import getQuestionsForRoadSing from "../services/getQuestionsForRoadSing";

const TestContext = createContext();

const initialState = {
  questions: [],
  questionsRoadSings: [],
  countCorrectAnswer: 0,
  countMistakes: 0,
  indexCurrentQuestion: 0,
  selectedAnswer: null,
  isDisable: false,
  timerLeft: 20 * 60,
};

function reducer(state, action) {
  console.log(state.timerLeft);
  switch (action.type) {
    case "reciveQuestions":
      return {
        ...state,
        questions: action.payload,
      };
    case "reciveQuestionsRoadSings":
      return {
        ...state,
        questionsRoadSings: action.payload,
      };

    case "start":
      return {
        ...state,
        countCorrectAnswer: action.payload.isCorrect
          ? state.countCorrectAnswer + 1
          : state.countCorrectAnswer,
        selectedAnswer: action.payload.answer,
        isDisable: action.payload.disable,
        countMistakes: state.questions.length - state.countCorrectAnswer,
      };
    case "setIndexCurrentQuestion":
      return {
        ...state,
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
      };
    case "reset":
      return {
        ...state,
        countCorrectAnswer: 0,
        countMistakes: 0,
        indexCurrentQuestion: 0,
        selectedAnswer: null,
        isDisable: false,
        timerLeft: 20 * 60,
      };
    case "tick":
      return {
        ...state,
        timerLeft: state.timerLeft - 1,
      };

    default:
      return state;
  }
}

function TestProvider({ children }) {
  const [
    {
      countCorrectAnswer,
      questions,
      indexCurrentQuestion,
      selectedAnswer,
      isDisable,
      countMistakes,
      timerLeft,
      questionsRoadSings,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestionsForCar();
        const shuffled = res.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        dispatch({ type: "reciveQuestions", payload: selected });
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestionsForRoadSing();
        const shuffled = res.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        dispatch({ type: "reciveQuestionsRoadSings", payload: selected });
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []); //reciveQuestionsRoadSings

  function startTest({ answer, isCorrect, disable }) {
    dispatch({ type: "start", payload: { answer, isCorrect, disable } });
  }
  function setIndexQuestion() {
    dispatch({ type: "setIndexCurrentQuestion" });
  }
  function resetTest() {
    dispatch({ type: "reset" });
  }
  function tick() {
    dispatch({ type: "tick" });
  }

  return (
    <TestContext.Provider
      value={{
        questions,
        indexCurrentQuestion,
        countCorrectAnswer,
        startTest,
        setIndexQuestion,
        selectedAnswer,
        isDisable,
        countMistakes,
        resetTest,
        tick,
        timerLeft,
        questionsRoadSings,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

const useTest = () => useContext(TestContext);
export { TestProvider, useTest };
