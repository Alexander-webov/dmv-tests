import { createContext, useContext, useState } from "react";

const TestContext = createContext();

function TestProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);

  return (
    <TestContext.Provider
      value={{
        questions,
        setQuestions,
        indexCurrentQuestion,
        setIndexCurrentQuestion,
        correctAnswers,
        setCorrectAnswers,
        countCorrectAnswer,
        setCountCorrectAnswer,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

const useTest = () => useContext(TestContext);
export { TestProvider, useTest };
