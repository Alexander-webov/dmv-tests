import { useEffect, useState } from "react";
import ButtonForMainBlock from "./ButtonForMainBlock";
import MainBlock from "./MainBlock";

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
      <div className="w-full flex items-center justify-between mt-8">
        <div>
          Режим экзамена - Вопрос {currentQuestion + 1} из {lengthQuestions}
        </div>
        <div>15 : 23</div>
      </div>
      <MainBlock title={question.explanation_en}>
        {question.options.map((itemMenu) => {
          let status = null;
          if (selectedAnswer) {
            if (itemMenu === question.correct) {
              status = "correct";
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
      <div className="w-full flex justify-between">
        <span>Завершить </span>
        <button onClick={handelIndex}>Вперед </button>
      </div>
    </div>
  );
}

export default Question;
