function ButtonForMainBlock({
  children,
  onClick,
  status,
  isDisable,
  positionTest = "center",
}) {
  let answerStatus;
  if (status === null) answerStatus = "border-2 border-transparent";
  if (status === "correct") answerStatus = "border-2 border-[#32e2b6]";
  if (status === "wrong") answerStatus = "border-2 border-[#FF5757] ";
  return (
    <li className="w-full">
      <button
        className={`w-full   bg-menuBgButton ${
          !isDisable && "hover:bg-menuBgButtonHover"
        }  text-white h-20 rounded-2xl text-xl font-semibold transition duration-300 mb-3 mt-3 pl-5 list-none text-${positionTest}  ${answerStatus}`}
        onClick={onClick}
        disabled={isDisable}
      >
        {children}
      </button>
    </li>
  );
}

export default ButtonForMainBlock;
