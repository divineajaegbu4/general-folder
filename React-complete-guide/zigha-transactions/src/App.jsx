import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./component/LogInForm/ForgotPassword";
import LogIn from "./component/LogInForm/LogIn";
import CallStackForms from "./component/MultiStep-Form/SignUp-Form/CallStackForms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CallStackForms />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
