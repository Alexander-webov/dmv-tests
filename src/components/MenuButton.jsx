function MenuButton({ title, onClick }) {
  return (
    <button
      className="w-full bg-menuBgButton hover:bg-menuBgButtonHover text-white py-4 px-6 rounded-2xl text-xl font-semibold transition duration-300 mb-3 mt-3"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default MenuButton;
