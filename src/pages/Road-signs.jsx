import Question from "../components/Question";
import ButtonBackToHome from "../components/ButtonBackToHome";
import Logo from "../components/Logo";

function RoadSigns() {
  return (
    <div>
      <Logo />
      <ButtonBackToHome />
      <Question type="roadSings" />
    </div>
  );
}

export default RoadSigns;
