import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteAdmin = ({ component, ...rest }) => {
  const { isLogin, isAdmin } = useSelector((state) => state.auth);

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && isAdmin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouteAdmin;
