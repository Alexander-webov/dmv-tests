import { NavLink } from "react-router-dom";
import arror from "../assets/images/arror-right.svg";
function ArrowButton() {
  return (
    <div>
      <NavLink
        to="/"
        className="inline-block  text-white text-xl transition duration-300 hover:opacity-35"
      >
        <div className="flex items-center justify-center">
          <img src={arror} alt="<" className="pr-5 inline-block h-[18px]" />
          <span> Back to main</span>
        </div>
      </NavLink>
    </div>
  );
}

export default ArrowButton;
