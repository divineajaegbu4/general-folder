import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

import classes from "./DashboardStyles.module.css";
import { EmptyDashboardSvg } from "./OnSvgForm";
import moment from "moment/moment";

function Dashboard(props) {
  const { dashboard, time, transaction, dashboardFullName,dashboardUsdBalance } = props;

  const comma = (props) => {
    let str = props.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  // const momentCalendar = moment().calendar(null, {
  //   sameDay: "[Today]",
  //   lastDay: "[Yesterday]",
  // });

  // const momentCalendar = moment().format("[Today]");

  const momentCalendar = (time) => {
    // get from-now for this date
    var fromNow = moment(time).fromNow();

    // ensure the date is displayed with today and yesterday
    return moment(time).calendar(null, {
      // when the date is closer, specify custom values
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      // when the date is further away, use from-now functionality
      sameElse: function () {
        return "[" + fromNow + "]";
      },
    });
  };

  const showDateDivider = function (date) {
    if (moment().isSame(date, "day")) {
      return moment().calendar().split(" ")[0];
    } else if (moment().isSame(moment(date).add(1, "day"), "day")) {
      return moment(date).calendar().split(" ")[0];
    } else if (moment().isSame(date, "week")) {
      return moment(date).format("dddd");
    } else {
      return moment(date).format("ll");
    }
  };

  return (
    <section className={classes.dashboard}>
      <div className={classes.dashboardItem}>
        <div className={classes.walletBalance}>
          <h3>
            Wallet Balance
            <br />
            <span>
              <sup>₦</sup>
              <strong>{comma(Number(props.dashboardNairaBalance))}</strong>.00
            </span>
          </h3>
        </div>

        <div className={classes.fundAccount}>
          <button className={`${classes.fund} ${classes.shift}`}>
            <span className={`${classes.iconPlus} ${classes.shift}`}>
              <AiOutlinePlus />
            </span>
            <span className={classes.text}>Fund Account</span>
          </button>

          <button className={`${classes.fund} ${classes.shift}`}>
            <span className={`${classes.iconPlus} ${classes.shift}`}>
              <RiSendPlaneFill />
            </span>
            <span className={classes.text}>Fund Account</span>
          </button>
        </div>

        <div className={classes.verifyAccount}>
          <div className={classes.arrowVerification}>
            <AiOutlineArrowUp />
          </div>
          <div className={classes.textVerification}>
            <h3>
              Verify your account <span>0/4</span>
            </h3>
            <p>
              Click here to complete your KYC process and verify your Ziga
              account
              <br /> so you can transact with it.
            </p>
          </div>
        </div>

        <div className={classes.searchTransaction}>
          <div className={classes.filterAmount}>
            <div className={classes.searchTransactionStyle}>
              <span>
                <BiSearch />
              </span>
              {/* <input type="text" /> */}
              <input type="text" placeholder="Search Transaction" />
            </div>
          </div>
          <div className={classes.date}>
            <MdOutlineDateRange />
          </div>
        </div>

       

        {transaction && (
          <div>
            {momentCalendar()}
            <br />
            {showDateDivider()}
            <br />
            {time()}

            <div>
              <p>{props.dashboardFullName}</p>
              <p>{props.dashboardUsdBalance}</p>
            </div>
          </div>
        )}
        <div className={classes.emptyTransaction}>
          <div className={classes.iconEmptyTransaction}>
            <MdOutlineDateRange />
          </div>
          <h3>There is nothing to see yet!</h3>
          <p>This is where you'II see your recent transactions.</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
