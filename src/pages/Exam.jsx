import Question from "../components/Question";
import ButtonBackToHome from "../components/ButtonBackToHome";
import Logo from "../components/Logo";

function Exam() {
  return (
    <div>
      <Logo />
      <ButtonBackToHome />
      <Question type="car" />
    </div>
  );
}

export default Exam;
