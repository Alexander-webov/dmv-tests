import logo from "../assets/images/logo.png";
import Questions from "../components/Questions";
import ArrowButton from "../components/ArrowButton";

function Exam() {
  return (
    <div>
      <img
        className="absolute left-20 top-10 max-w-[250px]"
        src={logo}
        alt="DMV tests"
      />
      <ArrowButton />
      <Questions />
    </div>
  );
}

export default Exam;
