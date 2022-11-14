import React, { useState } from "react";

import CartProvider from "../../store/CartProvider";
import Header from "../Layout/Header";
import ViewFoodSites from "../ViewFoodSites/ViewFoodSites";
import FoodApp from "../food-App/FoodApp";
import Meals from "../Meals/Meals";
import Noodles from "../food-App/Noodles";
import Footer from "../food-App/Footer";
import Cart from "../Cart/Cart";
import { viewImages } from "../../Slider/Image";
import SignupForm from "../SignupForm/SignupForm";

function CallStackFn() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
        <FoodApp />
        <ViewFoodSites showImageDetails={viewImages} />
        <Noodles />
        <Footer />
        <SignupForm onClose={hideCartHandler} />;
      </main>
    </CartProvider>
  );
}

export default CallStackFn;
