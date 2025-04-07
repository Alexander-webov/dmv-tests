import ButtonForMainBlock from "./ButtonForMainBlock";

function Questions() {
  const options = [
    { answer: "answer1" },
    { answer: "answer2" },
    { answer: "answer3" },
    { answer: "answer4" },
  ];
  return (
    <ul className="w-full">
      {options.map((itemMenu) => {
        return (
          <ButtonForMainBlock key={itemMenu.answer}>
            {itemMenu.answer}
          </ButtonForMainBlock>
        );
      })}
    </ul>
  );
}

export default Questions;
