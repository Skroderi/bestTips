import React from "react";
import { storiesOf } from "@storybook/react";
import LoginButton from "components/atoms/Button/LoginButton";

storiesOf("Buttons", module).add("LoginButton", () => (
  <LoginButton>Login</LoginButton>
));
