import React from "react";

import classes from "./MealsCallImage.module.css";

function MealsCallImage(props) {
  return (
    <div>
      {props.showImages.map((showImage, index) => {
        return (
          <img
            className={classes.images}
            key={index}
            src={showImage.imagesView}
            alt="This is food to order!"
          />
        );
      })}
    </div>
  );
}

export default MealsCallImage;

// import { listAllImages } from "../../../firebase";

// function App() {
//   const listAll = () => {
//     listAllImages("upload/");
//   };

//   return { listAll };
// }

// export default App;
