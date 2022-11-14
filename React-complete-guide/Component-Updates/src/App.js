import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";
// import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("APP RUNNING");

  // const toggleParagrahHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagrahy) => !prevShowParagrahy);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      {/* <h1>{listTitle}</h1> */}
      {/* <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allowo toggling</Button> */}
      <DemoList title={listTitle} items={listItems}></DemoList>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
