import { Fragment, useState } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Arrows from "../../Slider/Arrows";
import SliderContent from "../../Slider/SliderContent";
import SliderImage from "../../Slider/Image";
import classes from "./Header.module.css";
import Dots from "../../Slider/Dots";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const len = SliderImage.length - 1;

const Header = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.hideDelivery}>
          <NavLink className={classes.foodLink} to="/food-app">
            Food Delivery
          </NavLink>
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          imageSlider={SliderImage}
          onclickHandler={(activeIndex) => setActiveIndex(activeIndex)}
        />
        <SliderContent activeIndex={activeIndex} imageSlider={SliderImage} />
      </div>
    </Fragment>
  );
};

export default Header;
