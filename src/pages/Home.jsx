import SelectCity from "../components/SelectCity";

import logo from "../assets/images/logo.png";

import MainBlock from "../components/MainBlock";
import Menu from "../components/Menu";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center absolute right-20 top-10">
        <p className="text-white text-[20px] pr-5">Выберите штат</p>
        <SelectCity />
      </div>

      <div className="flex flex-col items-center justify-center  ">
        <div>
          <img src={logo} alt="DMV tests" />
        </div>
        <MainBlock
          title="Добро пожаловать в русскоязычные тесты для сдачи теоретического экзамена
        в DMV США, штат Нью-Йорк!"
        >
          <Menu />
        </MainBlock>
      </div>
    </div>
  );
}

export default Home;
