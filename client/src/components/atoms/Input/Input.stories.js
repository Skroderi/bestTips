import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "components/atoms/Input/Input";

storiesOf("Inputs", module)
  .add("LoginInput", () => <Input placeholder="LOGIN" />)
  .add("PasswordInput", () => <Input placeholder="PASSWORD" password />);
