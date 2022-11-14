import { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";

// const promise = loadStripe(
//   "pk_test_51LwpTJLuvzKpIQ3yZEz7LK5n8oYAL3DBK6I9nQ86lzo57RpsQluxBvgiRFVpfE7oYTLIkW3mCM4hwvmDhzwpCfcT00GlmNBAYn"
// );

const PUBLIC_KEY =
  "pk_test_51LwpTJLuvzKpIQ3yZEz7LK5n8oYAL3DBK6I9nQ86lzo57RpsQluxBvgiRFVpfE7oYTLIkW3mCM4hwvmDhzwpCfcT00GlmNBAYn";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Order />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={stripeTestPromise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
