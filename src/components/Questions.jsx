import { useEffect } from "react";
import getQuestoins from "../services/getQuestions";
import Question from "./Question";
import { useTest } from "../context/TestContext";

function Questions() {
  const { setQuestions } = useTest();

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

  return <Question />;
}

export default Questions;
