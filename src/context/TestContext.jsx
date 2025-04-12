import { createContext, useContext, useReducer, useEffect } from "react";
import getQuestoins from "../services/getQuestions";

const initialState = {
  countCorrectAnswer: 0,
  countMistakes: 0,
  questions: [],
  indexCurrentQuestion: 0,
  selectedAnswer: null,
  isDisable: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "reciveQuestions":
      return {
        ...state,
        questions: action.payload,
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
      };
    default:
      return state;
  }
}

const TestContext = createContext();

function TestProvider({ children }) {
  const [
    {
      countCorrectAnswer,
      questions,
      indexCurrentQuestion,
      selectedAnswer,
      isDisable,
      countMistakes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestoins();
        const shuffled = res.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        dispatch({ type: "reciveQuestions", payload: selected });
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  function startTest({ answer, isCorrect, disable }) {
    dispatch({ type: "start", payload: { answer, isCorrect, disable } });
  }
  function setIndexQuestion() {
    dispatch({ type: "setIndexCurrentQuestion" });
  }
  function resetTest() {
    dispatch({ type: "reset" });
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
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

const useTest = () => useContext(TestContext);
export { TestProvider, useTest };
