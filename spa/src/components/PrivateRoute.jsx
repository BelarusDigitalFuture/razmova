import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "@helpers";

function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn()) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };
