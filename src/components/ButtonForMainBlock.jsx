function ButtonForMainBlock({ children, onClick, status, isDisable }) {
  console.log(isDisable);
  let answerStatus;
  if (status === null) answerStatus = "border-2 border-transparent";
  if (status === "correct") answerStatus = "border-2 border-[#32e2b6]";
  if (status === "wrong") answerStatus = "border-2 border-[#FF5757] ";
  return (
    <button
      className={`w-full bg-menuBgButton ${
        !isDisable && "hover:bg-menuBgButtonHover"
      }  text-white py-6 px-6 rounded-2xl text-xl font-semibold transition duration-300 mb-3 mt-3 list-none text-center  ${answerStatus}`}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
    </button>
  );
}

export default ButtonForMainBlock;
