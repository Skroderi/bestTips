import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "../templates/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStye from "theme/GlobalStyle";
import { theme } from "theme/mainTheme";
import AllTips from "views/AllTips";
import Tips from "./Tips";
import History from "./History";
import AllTipsHistory from "./AllTipsHistory";
import UserPageTemplate from "../templates/UserPageTemplate";

//Redux
import { Provider } from "react-redux";
import store from "store/store";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utlis/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function Root() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  console.log(store);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <>
            <UserPageTemplate />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="tips" />} />
              <Route exact path="/tips" component={AllTips} />
              <Route exact path="/tips/history" component={AllTipsHistory} />
              {/* <Route path="/tips/football" component={FootballTips} /> */}
              <Route exact path="/tips/:id" component={Tips} />
              <Route path="/tips/:id/history" component={History} />
            </Switch>
          </>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
