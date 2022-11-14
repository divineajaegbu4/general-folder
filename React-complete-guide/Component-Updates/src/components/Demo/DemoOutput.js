import React from "react";
import MyParagrah from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOUPT");
  return (
    <MyParagrah>
      <p>{props.show ? "This is new!" : ""}</p>
    </MyParagrah>
  );
};

export default React.memo(DemoOutput);
