import React from "react";
import { useHistory } from "react-router-dom";
import { style } from "typestyle";

interface MenuItem {
  label: string;
  icon: JSX.Element;
  command: () => void;
}

const menuClass = style({
  backgroundColor: "white",
  display: "flex",
  flexFlow: "row wrap",
});
const menuItemClass = style({
  color: "gray",
  border: "1px lightgray",
});

const getMenuItem = (item: MenuItem) => {
  return (
    <div onClick={item.command} className={menuItemClass}>
      {item.icon}
      <span>{item.label}</span>
    </div>
  );
};

export const Menu: React.FC = () => {
  const history = useHistory();

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: <span>FontAwesome Icon required</span>,
      command: () => history.push("/"),
    },
    {
      label: "About",
      icon: <span>FontAwesome Icon required</span>,
      command: () => history.push("/about"),
    },
  ];

  return <React.Fragment>{menuItems.map(getMenuItem)}</React.Fragment>;
};
