import "./App.css";
import AdaptingBasedOnProps from "./Components/Basics/AdaptingBasedOnProps";
import Animations from "./Components/Basics/Animations";
import AttachingAdditionalProps from "./Components/Basics/AttachingAdditionalProps";
import ComingFromCss from "./Components/Basics/ComingFromCss";
import DoubleAmpersand from "./Components/Basics/DoubleAmpersand";
import ExtendingStyles from "./Components/Basics/ExtendingStyles";
import StyleH1 from "./Components/Basics/GettingStarted";
import PassedProps from "./Components/Basics/PassedProps";
import PseudoElementsSelectorsNesting from "./Components/Basics/PseudoelEmentsSelectorsNesting";
import StylingAnyComponent from "./Components/Basics/StylingAnyComponent";

function App() {
  return (
    <div className="App">
      <StyleH1 />
      <AdaptingBasedOnProps />
      <ExtendingStyles />
      <StylingAnyComponent />
      <PassedProps />
      <ComingFromCss />
      <PseudoElementsSelectorsNesting />
      <DoubleAmpersand/>
      <AttachingAdditionalProps/>
      <Animations/>
    </div>
  );
}

export default App;