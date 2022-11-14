// import { useContext } from "react";
import { NavLink } from "react-router-dom";

// import AuthContext from "../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // const history = useHistory();
  // const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  // const logoutHandler = () => {
  //   authCtx.logout();
  // };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={classes.link} to="/">
              Logout
            </NavLink>
          </li>

          {/* {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )} */}

          {/* {isLoggedIn && (
            <li>
              <NavLink to="/auth">Logout</NavLink>
            </li>
          )} */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
