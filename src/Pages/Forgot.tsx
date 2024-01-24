import axios from "axios";
import { SyntheticEvent, useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("forgot", { email });

      setNotify({
        show: true,
        error: false,
        message: "Verification link sent to email",
      });
    } catch (e) {
      setNotify({
        show: true,
        error: true,
        message: "Invalid Email",
      });
    }
  };

  let info;

  if (notify.show) {
    info = (
      <div
        className={notify.error ? "alert alert-danger rounded-0" : "alert alert-success rounded-0"}
        role="alert"
      >
        {notify.message}
      </div>
    );
  }

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">
          Forgot Password
        </h1>
        {info}
        <form onSubmit={submit}>
          <div className="form-floating">
            <input
              type="email"
              id="floatingInput"
              className="form-control mb-3"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Send Reset Password Link
          </button>
        </form>
        <p className="mt-5 mb-3 text-body-secondary text-center">
          &copy; ReactFront {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
};

export default Forgot;
