import { Switch, Route } from "react-router-dom";

import CallStackFn from "./components/CallStackFn/CallStackFn";
import ProfilePage from "./Form-Authentication/pages/ProfilePage";
import ContainerFunc from "./Landing-Page/ContainerFunc";
import AuthPage from "./Form-Authentication/pages/AuthPage";

function App() {
  return (
    <section>
      <Switch>
        <Route path="/food-app" exact>
          <CallStackFn />
        </Route>
        <Route path="/" exact>
          <ContainerFunc />
        </Route>
        <Route path="/auth-page" exact>
          <AuthPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
