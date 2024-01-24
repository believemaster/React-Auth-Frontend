import React, { SyntheticEvent, useState } from "react";
import "./Pages.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = ({ setLogin }: { setLogin: Function }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("login", {
      email: email,
      password: password,
    });

    setRedirect(true);

    setLogin();
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Please sign in
        </h1>
        <form onSubmit={submit}>
          <div className="form-floating">
            <input
              type="email"
              id="floatingInput"
              className="form-control rounded-bottom-0"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-top-0"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
};

export default Login;
