import React from "react";
import FlipMove from "react-flip-move";

import amazon from "./assests/amazon-logo3.png";
import { FaSistrix } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link className="link" to="/">
        <img className="header__logo" src={amazon} />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FaSistrix className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link className="link" to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <FlipMove>
          <Link className="link" to="/checkout">
            <div className="header__optionBasket">
              <MdShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </FlipMove>
      </div>
    </div>
  );
}

export default Header;
