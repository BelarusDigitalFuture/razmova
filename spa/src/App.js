import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { history, getAuthorizedUserId } from "@helpers";
import { alertActions, userActions } from "./helpers/store/actions";
import { PrivateRoute } from "./components";
import { HomePage } from "./routes/HomePage";
import { LoginPage } from "./routes/LoginPage";
import { RegisterPage } from "./routes/RegisterPage";
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
    const shouldLoadProfile = authorizedUserId && authorizedUserId !== auth.user?.id;

    shouldLoadProfile && dispatch(userActions.getCurrent());
  }, [auth.accessToken]);

  return (
    <StylesProvider injectFirst>
      <div>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/load" component={LoadDocumentPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </StylesProvider>
  );
}

export { App };
