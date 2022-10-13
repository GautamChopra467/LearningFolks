import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmailVerify from "./pages/user/EmailVerify";
import ForgotPassword from "./pages/user/ForgotPassword";
import Login from "./pages/user/Login";
import OTPVerify from "./pages/user/OTPVerify";
import SignUp from "./pages/user/SignUp";

const App = () => {

  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />      
        <Route exact path="/emailverify/:type" element={<EmailVerify />} />  
        <Route exact path="/otpverify" element={<OTPVerify />} />      
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />                                                              
            
      </Routes>
    </BrowserRouter>
  );
};

export default App;
