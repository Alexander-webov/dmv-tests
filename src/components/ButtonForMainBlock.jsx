function ButtonForMainBlock({ children, onClick }) {
  return (
    <li
      className="w-full bg-menuBgButton hover:bg-menuBgButtonHover text-white py-6 px-6 rounded-2xl text-xl font-semibold transition duration-300 mb-3 mt-3 list-none text-center cursor-pointer"
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default ButtonForMainBlock;
