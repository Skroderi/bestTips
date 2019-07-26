import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import AllTips from "views/AllTips";
import Tips from "./Tips";

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStye />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="tips" />} />
            <Route exact path="/tips" component={AllTips} />
            {/* <Route path="/tips/football" component={FootballTips} /> */}
            <Route path="/tips/:id" component={Tips} />
            {/* <Route path="/tennis" component={TennisTips} />
            <Route path="/hockey" component={HockeyTips} /> */}
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
