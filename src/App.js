import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OtpVerify, Recovery, SignIn, SignUp } from "./pages/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
