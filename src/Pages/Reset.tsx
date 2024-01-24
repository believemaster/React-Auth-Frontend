import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const Reset = () => {
  const params = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const token = params.token;

    console.log(token);

    await axios.post("reset", {
      token,
      password,
      password_confirm: passwordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Reset Your Password
        </h1>
        <form onSubmit={submit}>
          <div className="form-floating">
            <input
              type="password"
              id="password"
              className="form-control mb-3"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              id="passwordConfirm"
              className="form-control mb-3"
              placeholder="Password Confirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <label htmlFor="passwordConfirm">Password Confirm</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Reset Password
          </button>
        </form>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
};

export default Reset;
