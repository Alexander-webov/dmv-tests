import { NavLink } from "react-router-dom";
import ButtonForMainBlock from "./ButtonForMainBlock";

function Menu() {
  const menuItems = [
    { to: "/exam", label: "Экзамен" },
    { to: "/marathon", label: "Марафон" },
    { to: "/work-on-mistakes", label: "Работа над ошибками " },
    { to: "/answer", label: "Смотреть все ответы" },
  ];
  return (
    <>
      {menuItems.map((itemMenu) => {
        return (
          <ButtonForMainBlock key={itemMenu.to}>
            <NavLink to={itemMenu.to} className="block w-full">
              {itemMenu.label}
            </NavLink>
          </ButtonForMainBlock>
        );
      })}
    </>
  );
}

export default Menu;
