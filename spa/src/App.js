import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";

import { history, getAuthorizedUserId } from "@helpers";
import { alertActions, userActions } from "./helpers/store/actions";
import { muiTheme as theme } from "@helpers";
import { PrivateRoute } from "./components";
import { HomePage } from "./routes/HomePage";
import { LoginPage } from "./routes/LoginPage";
import { RegisterPage } from "./routes/RegisterPage";
import { DiscussionPage } from "./routes/DiscussionPage/DiscussionPage";
import { getAlert, getAuth } from "./helpers/store/selectors/selectors";
import { LoadDocumentPage } from "./routes/LoadDocumentPage/LoadDocumentPage";

function App() {
  const alert = useSelector(getAlert);
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  useEffect(() => {
    const authorizedUserId = getAuthorizedUserId();
    const shouldLoadProfile =
      authorizedUserId && authorizedUserId !== auth.user?.id;

    shouldLoadProfile && dispatch(userActions.getCurrent());
  }, [auth.accessToken, auth.user?.id, dispatch]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/load" component={LoadDocumentPage} />
            <Route path="/discussion/:projectId" component={DiscussionPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export { App };
