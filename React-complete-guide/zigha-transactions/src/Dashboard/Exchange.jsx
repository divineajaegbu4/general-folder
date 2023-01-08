import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SignupIcon from "../component/MultiStep-Form/SignUp-Form/SignupIcon";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt, FaWallet } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

import classes from "./Dashboard.module.css";
import WalletBalance from "./WalletBalance";
import Amount from "./Amount";
import Beneficiary from "./Beneficiary";
import Review from "./Review";
import Sent from "./Sent";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Dashboard from "./Dashboard";
import moment from "moment/moment";

function Exchange() {
  const [arrow, setArrow] = useState(false);
  const [dashboardItems, setDashboardItems] = useState(false);
  const [exchangeItems, setExchangeItems] = useState(true);
  const [walletItems, setWalletItems] = useState(false);
  const [activeState, setActiveState] = useState({
    activeObject: null,
    newSaveState: [{ express: "Express" }, { p2p: "P2P" }],
  });

  const [activeDashboardColor, setActiveDashboardColor] = useState({
    activeDashboardObject: null,
    newDashboardState: [
      { dashboard: "Dashboard" },
      { wallet: "Wallet" },
      { exchange: "Exchange" },
      { dashboardIcon: <MdDashboard /> },
      { walletIcon: <FaWallet /> },
      { exchangeIconMore: <MdExpandMore /> },
      { exchangeIconRight: <MdChevronRight /> },
      { exchangeIcon: <MdSend /> },
    ],
  });

  const [page, setPage] = useState(1);

  const [userInput, setUserInput] = useState({
    USD: "",
    naira: "",
    fullName: "",
    accountNumber: "",
    bankName: "",
    selectCountry: "",
    SwiftCode: "",
    routingNumber: "",
  });

  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [toggleP2p, setToggleP2p] = useState(false);

  const [dateState, setDateState] = useState(new Date());
  const [dashboards, setDashboards] = useState([]);
  const [transaction, setTransaction] = useState(false);

  const transactionView = () => {
    setTransaction(!transaction);
  };

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const time = dateState.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function newClock() {
    let clockDate = new Date();
    let hrs = clockDate.getHours();
    let mins = clockDate.getMinutes();

    let period = 'am';

    if(hrs == 0) {
        hrs = 12;
    }else if(hrs >= 12) {
        hrs = hrs - 12;
        period = 'pm'
    }

    if(hrs < 12 )

    return <div>{hrs}:{mins} {period}</div>
}

useEffect(()=>{
  setInterval(newClock(), 1000)
},[])



  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const { naira, USD, fullName } = userInput;

  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const prevStep = () => {
    setPage((currPage) => currPage - 1);
  };

  const handleChange = (input) => (e) => {
    const { value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    setIsActive(true);
  };

  const PageDisplay = () => {
    if (page === 1)
      return (
        <Amount
          nextStep={nextStep}
          handleChange={handleChange}
          values={userInput}
          minute={minute}
          second={second}
        />
      );
    else if (page === 2)
      return (
        <Beneficiary
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
          values={userInput}
          minute={minute}
          second={second}
        />
      );
    else if (page === 3)
      return (
        <Review
          nextStep={nextStep}
          values={userInput}
          prevStep={prevStep}
          minute={minute}
          second={second}
          transactionView={transactionView}
        />
      );
    else return <Sent nextStep={nextStep} handleChange={handleChange} />;
  };

  // AUTO CLICK

  const exchangeHandler = () => {
    setArrow((prevState) => !prevState);
  };

  const toggleActive = (index) => {
    setActiveState({
      ...activeState,
      activeObject: activeState.newSaveState[index],
    });
  };

  const toggleActiveStyles = (index) => {
    if (activeState.newSaveState[index] === activeState.activeObject) {
      return classes.grayBackground;
    } else {
      return "";
    }
  };

  const toggleDashboardActive = (index) => {
    setActiveDashboardColor({
      ...activeDashboardColor,
      activeDashboardObject: activeDashboardColor.newDashboardState[index],
    });
  };

  const toggleActiveDashboardStyles = (index) => {
    if (
      activeDashboardColor.newDashboardState[index] ===
      activeDashboardColor.activeDashboardObject
    ) {
      return classes.validColor;
    } else return classes.grayColor;
  };

  const toggleP2pHandler = () => {
    setToggleP2p(true);
    setExchangeItems(false);
    setDashboardItems(false);
    setWalletItems(false);
  };

  const dashboardClick = () => {
    setDashboardItems(true);
    setExchangeItems(false);
    setWalletItems(false);
    setToggleP2p(false);
  };

  const exchangeClick = () => {
    setExchangeItems(true);
    setDashboardItems(false);
    setWalletItems(false);
    setToggleP2p(false);
  };

  const walletClick = () => {
    setWalletItems(true);
    setExchangeItems(false);
    setDashboardItems(false);
    setToggleP2p(false);
  };

 

  return (
    <section className={classes.exchangeContainer}>
      <main>
        <div className={classes.exchange}>
          {/* Header */}
          <div className={classes.logo}>
            <SignupIcon />
            <h3>Exchange</h3>
            <h3>Name and Image</h3>
          </div>

          {/* DashboardIcon */}
          <div className={classes.dashboardList}>
            <ul>
              {activeDashboardColor.newDashboardState.map(
                (dashboardItems, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      toggleDashboardActive(index);
                    }}
                    className={toggleActiveDashboardStyles(index)}
                  >
                    <div onClick={dashboardClick}>
                      <Link to="/dashboard">
                        <span className={classes.dashboardIcon}>
                          {dashboardItems.dashboardIcon}
                        </span>
                        <span>{dashboardItems.dashboard}</span>
                      </Link>
                    </div>

                    <div>
                      <Link to="/dashboard/wallet">
                        <span
                          className={`${classes.dashboardIcon} ${classes.dashboardIconWallet}`}
                        >
                          {dashboardItems.walletIcon}
                        </span>
                        <span>{dashboardItems.wallet}</span>
                      </Link>
                    </div>
                    <div onClick={exchangeHandler}>
                      <Link to="/dashboard/exchange" onClick={exchangeClick}>
                        <span
                          className={`${classes.dashboardIcon} ${classes.dashboardIconExchange}`}
                        >
                          {dashboardItems.exchangeIcon}
                        </span>
                        <span>{dashboardItems.exchange}</span>
                      </Link>

                      <div className={classes.toggleIcon}>
                        {arrow ? (
                          <sub style={{ fontSize: 20 }}>
                            <span className={classes.subIcon}>
                              {dashboardItems.exchangeIconMore}
                            </span>
                          </sub>
                        ) : (
                          <sub style={{ fontSize: 20 }}>
                            <span>{dashboardItems.exchangeIconRight}</span>
                          </sub>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </ul>
          </div>

          {/* ProgressBar */}
          {exchangeItems && (
            <div className={classes.exchangeFormWallet}>
              <WalletBalance balance={naira} />
              <div className={classes.form}>
                <MultiStepProgressBar step={page} />
                <div>{PageDisplay()}</div>
              </div>
            </div>
          )}

          {/* DashboardItems */}
          {dashboardItems && (
            <div>
              <Dashboard
                dashboardNairaBalance={naira}
                dashboardUsdBalance={USD}
                dashboardFullName={fullName}
                time={newClock}
                transaction={transaction}
              />
            </div>
          )}

          {/* P2pItem */}
          <div className={classes.p2pText}>
            {toggleP2p && (
              <div>
                <p>Not ready yet!</p>
              </div>
            )}
          </div>

          {/* express and p2p */}
          <div className={classes.express}>
            {arrow && (
              <ul>
                {activeState.newSaveState.map((item, index) => (
                  <div
                    className={toggleActiveStyles(index)}
                    key={index}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    <Link
                      to="/dashboard/exchange/express"
                      className={classes.linkView}
                      onClick={exchangeClick}
                    >
                      {item.express}
                    </Link>
                    <br />
                    <br />
                    <Link
                      to="/dashboard/exchange/p2p"
                      className={classes.linkView2}
                      onClick={toggleP2pHandler}
                    >
                      {item.p2p}
                    </Link>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Exchange;
