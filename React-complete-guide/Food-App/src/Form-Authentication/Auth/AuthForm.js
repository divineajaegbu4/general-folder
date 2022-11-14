import React, { useState, useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";
import "./AuthForm.css";

const AuthForm = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Optional:Add validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApfpmgvVx0vJ96b19jVRQCABmG0XB1bcU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApfpmgvVx0vJ96b19jVRQCABmG0XB1bcU";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            //show an error modal
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/food-app");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <header className="formHeader">
        <div className="sidebarIconView">
          {openSidebar === false ? (
            <FaBars onClick={handleOpenSidebar} />
          ) : (
            <FaTimes onClick={handleOpenSidebar} />
          )}
        </div>

        <div
          className={`sidebar-form ${
            openSidebar === true ? "block" : "hidden"
          }`}
        >
          <h3 className="linkTo">
            <NavLink to="/">Food delivery</NavLink>
          </h3>
          <NavLink to="/auth-page" className="formDirection">
            Order now
          </NavLink>
        </div>
      </header>
      <section className="auth">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="actions">
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
            <NavLink to="/profile" className="formLink">
              forgotten password?
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
