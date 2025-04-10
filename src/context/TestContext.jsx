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
  console.log(state, action);
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
      };
    case "setIndexCurrentQuestion":
      return {
        ...state,
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
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
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestoins();
        dispatch({ type: "reciveQuestions", payload: res });
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
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

const useTest = () => useContext(TestContext);
export { TestProvider, useTest };
