import { NavLink } from "react-router-dom";
import ButtonForMainBlock from "./ButtonForMainBlock";

function Menu() {
  const menuItems = [
    { to: "/exam", label: "Car TEST" },
    { to: "/cdl-test", label: "CDL TEST" },
    { to: "/motorcycle-test", label: "Motorcycle TEST" },
    { to: "/road-signs", label: "Дорожные знаки TEST" },
  ];
  return (
    <>
      {menuItems.map((itemMenu) => {
        return (
          <ButtonForMainBlock key={itemMenu.to}>
            <NavLink to={itemMenu.to} className="block w-full p-6">
              {itemMenu.label}
            </NavLink>
          </ButtonForMainBlock>
        );
      })}
    </>
  );
}

export default Menu;
