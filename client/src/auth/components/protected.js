import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component, ...rest }) => {
  var RenderComponents = component;
  let hasToken = JSON.parse(localStorage.getItem("auth-token"));

  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null && hasToken !== "" ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
