import {lazy, Suspense} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./config";
import { LOGIN_ROUTE, DASHBOARD_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE} from "./constant";

import NotFound from "../pages/errors/notfound_404";

const Login = lazy (()=>import("pages/auth/login"));
const Dashboard = lazy (()=>import("pages/dashboard"));

export function MainRouter(){
    const isAuthenticated = true;
    return (
        <BrowserRouter>
            <Suspense fallback = {<p>Loading...</p>}>
                <Switch>
                    <PublicRoutes path= {HOME_ROUTE} exact>
                        <Login />
                    </PublicRoutes>
                    <PublicRoutes path= {LOGIN_ROUTE} exact>
                        <Login />
                    </PublicRoutes>
                    <PrivateRoutes path= {DASHBOARD_ROUTE} isAuthenticated={isAuthenticated} exact>
                        <Dashboard />
                    </PrivateRoutes>
                    <Route path = {NOT_FOUND_ROUTE}>
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default MainRouter;