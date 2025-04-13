import ButtonForMainBlock from "./ButtonForMainBlock";
import Tick from "./Tick";
import MainBlock from "./MainBlock";
import { Link } from "react-router-dom";
import { useTest } from "../context/TestContext";
import hat from "../assets/images/hat.svg";

function Question() {
  const {
    questions,
    indexCurrentQuestion,
    startTest,
    setIndexQuestion,
    selectedAnswer,
    isDisable,
    tick,
  } = useTest();

  const question = questions[indexCurrentQuestion];

  function handelAnswer(answer) {
    if (!selectedAnswer) {
      const isCorrect = answer === question.correct;
      startTest({ answer, isCorrect, disable: true });
    }
    tick();
  }
  function handelIndex() {
    setIndexQuestion();
    startTest({ answer: null, isCorrect: false, disable: false });
  }

  if (!question || !Array.isArray(question.options)) return null;

  return (
    <div className=" flex flex-col items-center justify-center text-slate-50">
      <div className="flex items-center justify-between mt-8 ">
        <div className="flex">
          <img src={hat} alt="hat" className="pr-2" />
          <div>
            <span className="text-lg font-semibold">
              Режим экзамена - Вопрос {indexCurrentQuestion + 1}{" "}
            </span>{" "}
            из {questions.length}
          </div>
        </div>
        <Tick />
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
              positionTest={"left"}
              onClick={() => handelAnswer(itemMenu)}
            >
              {itemMenu}
            </ButtonForMainBlock>
          );
        })}
      </MainBlock>
      <div className="w-full mt-4 text-right">
        {indexCurrentQuestion + 1 !== questions.length ? (
          <button
            onClick={handelIndex}
            className="bg-[#26AED7] hover:bg-[#30CFFF] text-white font-bold py-2 px-4 rounded"
          >
            Следующий
          </button>
        ) : (
          <Link
            to="/result"
            className="bg-[#26AED7] hover:bg-[#30CFFF] text-white font-bold py-2 px-4 rounded"
          >
            Смотреть результат
          </Link>
        )}
      </div>
    </div>
  );
}

export default Question;
