import React from "react";
import { render } from "@testing-library/react";
import AddTipButton from "./AddTipButton";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/mainTheme";

describe("<AddtipButton/>", () => {
  it("should render an <button> tag", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <AddTipButton />
      </ThemeProvider>
    );
    expect(container.querySelector("button")).not.toBeNull();
  });
});
