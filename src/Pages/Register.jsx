import React from "react";
import "./Pages.css";

function Register() {
  return (
    <>
      <main class="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Please sign in
        </h1>
        <div className="form-floating">
          <input
            type="text"
            id="firstName"
            className="form-control rounded-bottom-0"
            placeholder="First Name"
          />
          <label for="firstName">First Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="lastName"
            className="form-control rounded-0"
            placeholder="Last Name"
          />
          <label for="lastName">Last Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            id="email"
            className="form-control rounded-0"
            placeholder="name@example.com"
          />
          <label for="email">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="password"
            className="form-control rounded-0"
            placeholder="Password"
          />
          <label for="password">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control rounded-top-0 mb-3"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          <label for="confirmPassword">Confirm Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign Up
        </button>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}

export default Register;
