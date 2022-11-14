import React, { useState } from "react";
import Typed from "react-typed";

import "./AnimationType.css";

function AnimationType() {
  const [likeSite, setLikeSite] = useState("Like");

  const likeHandler = () => {
    setLikeSite("👍");
  };
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openNewTabHandler = () => {
    openNewTab(
      "https://www.istockphoto.com/search/2/image?phrase=nigerian+food"
    );
  };
  return (
    <div className="app">
      <div className="container">
        <h1>Buy Different Delicious Food Here!</h1>
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "Buy Healthy Food Here!",
            "Buy African Food Here!",
            "Buy Drinks Here!",
            "Buy Vegetable Soup Here!",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div className="buttons">
        <button className="btn-pink btn" onClick={openNewTabHandler}>
          View Foods
        </button>
        <button className="btn-purple btn" onClick={likeHandler}>
          {likeSite}
        </button>
      </div>
    </div>
  );
}

export default AnimationType;
