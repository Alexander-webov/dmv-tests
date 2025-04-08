import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <>
      <img
        className="absolute left-20 top-10 max-w-[250px]"
        src={logo}
        alt="DMV tests"
      />
    </>
  );
}

export default Logo;
