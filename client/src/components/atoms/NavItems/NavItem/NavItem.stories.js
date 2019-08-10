import React from "react";
import { storiesOf } from "@storybook/react";
import NavItem from "components/atoms/NavItems/NavItem/NavItem";

storiesOf("NavItem", module)
  .add("All Tips", () => <NavItem>All Tips</NavItem>)
  .add("Fotball Tips", () => <NavItem>Football Tips</NavItem>)
  .add("Tenis Tips", () => <NavItem>Tenis Tips</NavItem>);
