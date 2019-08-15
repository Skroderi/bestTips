import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import store from "store/store";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import AllTips from "views/AllTips";
import Tips from "./Tips";
import History from "./History";
import AllTipsHistory from "./AllTipsHistory";
//Redux
import { Provider } from "react-redux";

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStye />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="tips" />} />
            <Route exact path="/tips" component={AllTips} />
            <Route exact path="/tips/history" component={AllTipsHistory} />
            {/* <Route path="/tips/football" component={FootballTips} /> */}
            <Route exact path="/tips/:id" component={Tips} />
            <Route path="/tips/:id/history" component={History} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
