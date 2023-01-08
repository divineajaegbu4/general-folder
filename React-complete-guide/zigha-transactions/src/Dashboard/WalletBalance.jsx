import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import classes from "./Dashboard.module.css";

function WalletBalance(props) {
  const comma = (props) => {
    let str = props.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };
  return (
    <div>
      <div className={classes.exchangeForm}>
        <div className={classes.walletBalance}>
          <div className={classes.border}></div>
          <h1>Wallet Balance</h1>
          <h3>
            <span className={classes.naira}>₦</span>
            <span className={classes.num}>{comma(Number(props.balance))}</span>.00
          </h3>

          <button className={`${classes.fund} ${classes.shift}`}>
            <span className={`${classes.iconPlus} ${classes.shift}`}>
              <AiOutlinePlus />
            </span>
            <span className={classes.text}>Fund Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletBalance;
