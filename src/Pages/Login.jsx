import React from "react";
import "./Pages.css";

function Login() {
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Please sign in
        </h1>
        <div className="form-floating">
          <input
            type="email"
            id="floatingInput"
            className="form-control rounded-bottom-0"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control rounded-top-0"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}

export default Login;
