import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/mainTheme";

describe("<Alert/>", () => {
  it("should render <StyledDiv/>", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Alert />
      </ThemeProvider>
    );
    expect(container.to);
  });
});
