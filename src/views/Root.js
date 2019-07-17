import React from "react";
import { Provider } from "react-redux";
import store from "store/store";
import MainTemplate from "templates/MainTemplate";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";

function Root() {
  return (
    <Provider store={store}>
      <GlobalStye />
      <ThemeProvider theme={theme}>
        <MainTemplate />
      </ThemeProvider>
    </Provider>
  );
}

export default Root;
