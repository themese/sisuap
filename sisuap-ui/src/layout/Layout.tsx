import React from "react";
import { Menu } from "./Menu";

export const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Menu />
      {props.children}
    </React.Fragment>
  );
};
