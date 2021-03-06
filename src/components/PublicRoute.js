import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component, restricted, ...rest }) => {
  const { isLogin, isAdmin } = useSelector((state) => state.auth);
  const Component = component;

  if (!isAdmin) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin && restricted ? (
            <Redirect to="/home" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin && isAdmin && restricted ? (
            <Redirect to="/detailadmin" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
};

export default PublicRoute;
