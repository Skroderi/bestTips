import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "../templates/Layout";
import Tips from "views/Tips";
import UserTips from "views/UserTips";
import Statistics from "views/Statistics";
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
              <Route exact path="/tips" component={Tips} />
              <Route exact path="/:id/tips" component={UserTips} />
              <Route exact path="/:id/stats" component={Statistics} />
            </Switch>
          </>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
