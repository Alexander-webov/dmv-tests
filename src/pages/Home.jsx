import MenuButton from "../components/MenuButton";
import SelectCity from "../components/SelectCity";
import bg from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center absolute right-20 top-10">
        <p className="text-white text-[20px] pr-5">Выберите штат</p>
        <SelectCity />
      </div>

      <div className="flex flex-col items-center justify-center max-w-2xl ">
        <div>
          <img src={logo} alt="DMV tests" />
        </div>
        <div>
          <h3 className="text-sky-50 text-center pt-7 pb-12">
            Добро пожаловать в русскоязычные тесты для сдачи теоретического
            экзамена в DMV США, штат Нью-Йорк!
          </h3>
          <div className="flex flex-col items-center bg-bgMain p-5 rounded-2xl">
            <MenuButton title={"Экзамен"} />
            <MenuButton title={"Марафон"} />
            <MenuButton title={"Работа над ошибками"} />
            <MenuButton title={"Смотреть все ответы"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
