import React from "react";

import { storiesOf } from "@storybook/react";
import plus from "assets/icons/plus.svg";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";

storiesOf("ButtonIcon", module).add("PlusIcon", () => (
  <ButtonIcon icon={plus} />
));
