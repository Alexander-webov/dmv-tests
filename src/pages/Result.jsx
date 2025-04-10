import ArrowButton from "../components/ArrowButton";
import fail from "../assets/images/fail.png";
import success from "../assets/images/success.png";
import { useTest } from "../context/TestContext";

function Result() {
  const { countCorrectAnswer, questions } = useTest();

  return (
    <div className="text-center text-white flex flex-col justify-center ">
      <img className="block m-auto w-[280px] " src={fail} alt="" />
      <div>
        Упс .... Экзамен не сдан
        <span>Попробуй подучить теорию ещё. У тебя всё получится!</span>
      </div>
      <div>{questions.length - countCorrectAnswer} ошибок</div>
      <button>Пройти экзамен ещё раз</button>
      <ArrowButton />
    </div>
  );
}

export default Result;
