import React from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "../component/LogInForm/ForgotPassword";
import LogIn from "../component/LogInForm/LogIn";
import CallStackForms from "../component/MultiStep-Form/SignUp-Form/CallStackForms";
import Dashboard from "../Dashboard/Dashboard";
import Wallet from "../Dashboard/Wallet";
import Exchange from "../Dashboard/Exchange";

function GeneralExchange() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <CallStackForms />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route path="/dashboard">
          <Exchange />
        </Route>

        <Route path="/dashboard-view">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default GeneralExchange;
