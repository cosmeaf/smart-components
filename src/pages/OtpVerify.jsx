import React, { useState, useEffect } from "react";
import { SmartForm, SmartOtpInput } from "../components/forms";
import "./global.css";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.protocol);
    console.log(window.location.hostname);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp && otp.length === 6) {
      console.log("Código OTP ", otp);
    } else {
      console.error("Preencha todos os campos OTP corretamente.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div className="card mt-5 p-4">
            <SmartForm onSubmit={handleSubmit}>
              <SmartOtpInput
                label="Código"
                name="otp"
                value={otp}
                type="otp"
                onChange={(value) => setOtp(value)}
              />

              <button type="submit" className="btn btn-success mt-4 mb-3 w-100">
                VALIDAR
              </button>
            </SmartForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
