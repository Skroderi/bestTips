import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import MainTemplate from "templates/MainTemplate";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import AllTips from "views/AllTips";
import FootballTips from "./FootballTips";
import TennisTips from "./TennisTips";
import HockeyTips from "./HockeyTips";

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStye />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={AllTips} />
            <Route path="/football" component={FootballTips} />
            <Route path="/tennis" component={TennisTips} />
            <Route path="/hockey" component={HockeyTips} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
