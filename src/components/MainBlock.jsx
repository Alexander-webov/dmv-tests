function MainBlock({ title, componentWithData }) {
  return (
    <div>
      <h3 className="text-sky-50 text-center pt-7 pb-12">{title}</h3>
      <div className="flex flex-col items-center bg-bgMain p-5 rounded-2xl">
        <ul className="w-full">{componentWithData}</ul>
      </div>
    </div>
  );
}

export default MainBlock;
