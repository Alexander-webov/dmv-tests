function MainBlock({ title, children }) {
  return (
    <div className="max-w-[670px]">
      <h3 className="text-sky-50 text-center pt-5 text-2xl min-h-[110px]">
        {title}
      </h3>
      <div className="flex flex-col items-center bg-bgMain p-5 rounded-2xl">
        {/* ul gets list menu or answers */}
        <ul className="w-full">{children}</ul>
      </div>
    </div>
  );
}

export default MainBlock;
