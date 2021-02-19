/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAuthenticated = useSelector(({ loginState: { isAuthenticated } }) => isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {isUserAuthenticated && <Component {...props} />}
            {!isUserAuthenticated && (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )}
          </>
        );
      }}
    />
  );
};
export default PrivateRoute;
