import React from "react";
import MainTemplate from "templates/MainTemplate";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

function Root() {
  return (
    <div>
      <GlobalStye />
      <ThemeProvider theme={theme}>
        <MainTemplate />
      </ThemeProvider>
    </div>
  );
}

export default Root;
