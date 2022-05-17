import { Route, Redirect } from "react-router";
import { LOGIN_ROUTE } from "./constant";

export function PublicRoutes(props) {
  const {
    isAuthenticated = false,
    isRestricted = false,
    path,
    children,
  } = props;
  return (
    <Route
      path={path}
      render={({ location }) =>
        isAuthenticated && isRestricted ? (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export function PrivateRoutes(props) {
  const { isAuthenticated, path, children } = props;
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated ? (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
