import React, { useState } from "react";
import "./Pages.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e:any) => {
    e.preventDefault();

    await axios.post('register', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    })

    setRedirect(true);
  }
  
  if (redirect) {
    return <Navigate to="/login" />
  }


  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Please sign Up
        </h1>
        <form onSubmit={submit}>
          <div className="form-floating">
            <input
              type="text"
              id="firstName"
              className="form-control rounded-bottom-0"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              id="lastName"
              className="form-control rounded-0"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              id="email"
              className="form-control rounded-0"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              id="password"
              className="form-control rounded-0"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control rounded-top-0 mb-3"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign Up
          </button>
        </form>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}

export default Register;
