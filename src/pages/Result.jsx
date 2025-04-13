import ButtonBackToHome from "../components/ButtonBackToHome";
import fail from "../assets/images/fail.png";
import success from "../assets/images/success.png";
import { useTest } from "../context/TestContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { countMistakes, resetTest, countCorrectAnswer } = useTest();
  const navigate = useNavigate();
  return (
    <div className="text-center text-white flex flex-col justify-center ">
      <img
        className="block m-auto w-[280px] "
        src={countMistakes > 4 ? fail : success}
        alt="score"
      />
      {countCorrectAnswer < 16 ? (
        <div>
          <div className="text-[22px] font-semibold">
            Упс .... Экзамен не сдан
          </div>
          <span>Попробуй подучить теорию ещё. У тебя всё получится!</span>
          <div className="text-[18px] mt-3 text-red-600">
            {countMistakes} ошибок
          </div>
        </div>
      ) : (
        <div>
          <div className="text-[24px] mt-2 "> Поздравляем! </div>
          <span className="text-[18px]">Экзамен сдан</span>
        </div>
      )}

      <button
        onClick={() => {
          resetTest();
          navigate("/exam");
        }}
        className="bg-[#26AED7] hover:bg-[#30CFFF] test-[16px] px-2 py-4 rounded-3xl my-6"
      >
        Пройти экзамен ещё раз
      </button>
      <ButtonBackToHome />
    </div>
  );
}

export default Result;
