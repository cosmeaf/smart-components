import React, { useState } from "react";
import { SmartForm, SmartInput } from "../components/forms";
import "./global.css";

const SignUp = () => {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passconf, setPassconf] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div className="card mt-5 p-4">
            <SmartForm onSubmit={handleSubmit}>
              <SmartInput
                label="Nome"
                name="first_name"
                placeholder="Nome"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <SmartInput
                label="Sobrenome"
                name="last_name"
                placeholder="Sobrenome"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
              <SmartInput
                label="E-mail"
                name="email"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <SmartInput
                label="Password"
                name="password"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <SmartInput
                label="Confirmar Password"
                name="passconf"
                placeholder="Confirmar Password"
                type="password"
                onChange={(e) => setPassconf(e.target.value)}
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

export default SignUp;
