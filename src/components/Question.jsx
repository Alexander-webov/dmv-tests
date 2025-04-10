import ButtonForMainBlock from "./ButtonForMainBlock";
import MainBlock from "./MainBlock";
import { Link } from "react-router-dom";
import { useTest } from "../context/TestContext";

function Question() {
  const {
    questions,
    indexCurrentQuestion,
    startTest,
    setIndexQuestion,
    selectedAnswer,
    isDisable,
  } = useTest();

  const lengthQuestions = questions.length;
  const question = questions[indexCurrentQuestion];

  function handelAnswer(answer) {
    if (!selectedAnswer) {
      const isCorrect = answer === question.correct;
      startTest({ answer, isCorrect, disable: true });
    }
  }
  function handelIndex() {
    setIndexQuestion();
    startTest({ answer: null, isCorrect: false, disable: false });
  }
  console.log(isDisable);
  if (!question || !Array.isArray(question.options)) return null;
  console.log(question);
  return (
    <div className="max-w-full flex flex-col items-center justify-center text-slate-50">
      <div className="w-full flex items-center justify-between mt-8 ">
        <div>
          Режим экзамена - Вопрос {indexCurrentQuestion + 1} из{" "}
          {lengthQuestions}
        </div>
        <div className="bg-gray-500 p-1 rounded-full">15 : 23</div>
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
      <div className="w-full flex justify-between mt-4">
        <span>Завершить </span>
        {indexCurrentQuestion + 1 !== lengthQuestions ? (
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
