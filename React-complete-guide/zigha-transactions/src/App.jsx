import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./component/LogInForm/ForgotPassword";
import LogIn from "./component/LogInForm/LogIn";
import CallStackForms from "./component/MultiStep-Form/SignUp-Form/CallStackForms";

function App() {
  return (
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
    </Switch>
  );
}

export default App;
