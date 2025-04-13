import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clock from "../assets/images/clock.svg";
import { useTest } from "../context/TestContext";

function Timer() {
  const navigate = useNavigate();
  const { timerLeft, tick } = useTest();

  useEffect(
    function () {
      if (timerLeft === 0) {
        navigate("/result");
        return;
      }
      const timer = setInterval(() => {
        tick();
      }, 1000);
      return () => clearInterval(timer);
    },
    [timerLeft, tick, navigate]
  );

  const minutes = String(Math.floor(timerLeft / 60)).padStart(2, "0");
  const seconds = String(timerLeft % 60).padStart(2, "0");

  return (
    <div className="timer">
      <div className="bg-gray-500 px-2 py-1 ml-2 rounded-full flex">
        <img className="pr-1" src={clock} alt="clock" />
        <span>
          {minutes} : {seconds}
        </span>
      </div>
    </div>
  );
}

export default Timer;
