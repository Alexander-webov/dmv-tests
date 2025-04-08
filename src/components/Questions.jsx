import { useState } from "react";
import { useEffect } from "react";
import getQuestoins from "../services/getQuestions";
import Question from "./Question";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
  const lengthQuestions = questions.length;
  const currentQuestion = indexCurrentQuestion;
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestoins();
        setQuestions(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <Question
      setIndexCurrentQuestion={setIndexCurrentQuestion}
      lengthQuestions={lengthQuestions}
      currentQuestion={currentQuestion}
      question={questions[indexCurrentQuestion]}
    />
  );
}

export default Questions;
