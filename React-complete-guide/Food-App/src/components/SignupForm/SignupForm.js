import React, { Fragment, useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "./Modal";
import image from "../../assests/NigerianFood2.jpg";
import classesCss from "./SignupForm.module.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function SignupForm({ hideForm }) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeout(true);
    }, 7100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {isLoading && (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {isTimeout && (
        <div>
          {isLogin && (
            <Modal onClose={switchAuthModeHandler}>
              <FaTimesCircle
                className={classesCss.right}
                onClick={switchAuthModeHandler}
              />

              <p className={classesCss.text}>Hi, welcome to food delivery!</p>
              <img
                src={image}
                className={classesCss.clickImage}
                alt="food delivery food"
              />
            </Modal>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default SignupForm;
