import { useEffect, useState } from "react";
import ButtonForMainBlock from "./ButtonForMainBlock";
import MainBlock from "./MainBlock";
import { Link } from "react-router-dom";

function Question({
  question,
  setIndexCurrentQuestion,
  currentQuestion,
  lengthQuestions,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isDisable, setIsDisable] = useState(false);

  function handelAnswer(answer) {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      setIsDisable(true);
      //setCounterCorrectAnswer((prev) => prev + 1)
    }
  }
  function handelIndex() {
    setIndexCurrentQuestion((index) => index + 1);
    setSelectedAnswer(null);
    setIsDisable(false);
  }

  if (!question || !Array.isArray(question.options)) return null;
  return (
    <div className="max-w-full flex flex-col items-center justify-center text-slate-50">
      <div className="w-full flex items-center justify-between mt-8 ">
        <div>
          Режим экзамена - Вопрос {currentQuestion + 1} из {lengthQuestions}
        </div>
        <div className="bg-gray-500 p-1 rounded-full">15 : 23</div>
      </div>
      <MainBlock title={question.explanation_en}>
        {question.options.map((itemMenu) => {
          let status = null;

          if (selectedAnswer) {
            if (itemMenu === question.correct) {
              status = "correct";
              selectedAnswer === question.correct
                ? (counterCorrectAnswer = counterCorrectAnswer + 1)
                : null;
            } else if (itemMenu === selectedAnswer) {
              status = "wrong";
            }
          }

          return (
            <ButtonForMainBlock
              isDisable={isDisable}
              status={status}
              key={itemMenu}
              onClick={() => handelAnswer(itemMenu)}
            >
              {itemMenu}
            </ButtonForMainBlock>
          );
        })}
      </MainBlock>
      <div className="w-full flex justify-between mt-4">
        <span>Завершить </span>
        {currentQuestion + 1 !== lengthQuestions ? (
          <button
            onClick={handelIndex}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Вперед{" "}
          </button>
        ) : (
          <Link
            to="/result"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Смотреть результат
          </Link>
        )}
      </div>
    </div>
  );
}

export default Question;
