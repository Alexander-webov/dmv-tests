import logo from "../assets/images/logo.png";
import MainBlock from "../components/MainBlock";
import Questions from "../components/Questions";

function Exam() {
  return (
    <div>
      <img
        className="absolute left-20 top-10 max-w-[250px]"
        src={logo}
        alt="DMV tests"
      />
      <div>
        <span></span>На главную
      </div>
      <div className="max-w-full flex flex-col items-center justify-center">
        <div>
          <div>Режим экзамена - Вопрос 7 из 20</div>
          <div>15 : 23</div>
        </div>
        <div>
          Как влияет алкоголь на способность управления транспортным средством и
          суждения?
        </div>
        <MainBlock
          title="Добро пожаловать в русскоязычные тесты для сдачи теоретического экзамена
        в DMV США, штат Нью-Йорк!"
          componentWithData={<Questions />}
        />
        <div>
          <span>назад </span>
          <span>вперед </span>
        </div>
      </div>
    </div>
  );
}

export default Exam;
