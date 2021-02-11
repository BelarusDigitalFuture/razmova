import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { history } from "./helpers";
import { alertActions } from "./helpers/store/actions";
import { PrivateRoute } from "./components";
import { HomePage } from "./routes/HomePage";
import { LoginPage } from "./routes/LoginPage";
import { RegisterPage } from "./routes/RegisterPage";
import { DiscussionPage } from "./routes/DiscussionPage/DiscussionPage";
import { getAlert } from "./helpers/store/selectors/selectors";
import { LoadDocumentPage } from "./routes/LoadDocumentPage/LoadDocumentPage";

function App() {
  const alert = useSelector(getAlert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);
  return (
    <StylesProvider injectFirst>
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Router history={history}>
        <Switch>
          {/* <PrivateRoute exact path="/" component={HomePage} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/load" component={LoadDocumentPage} />
          <Route path="/discussion/:id" component={DiscussionPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export { App };
