import React from "react";

import { storiesOf } from "@storybook/react";
import plus from "assets/icons/plus.svg";
import AddTipButton from "components/atoms/AddTipButton/AddTipButton";

storiesOf("AddTipButton", module).add("PlusIcon", () => (
  <ButtonIcon icon={plus} />
));
