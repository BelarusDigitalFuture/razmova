import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../helpers/store/actions";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(username, password, from));
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form} name="form" onSubmit={handleSubmit}>
            <h1 className={styles.title}>Login</h1>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              className={
                "form-control" + (submitted && !username ? " is-invalid" : "")
              }
            />
            {submitted && !username && (
              <div className="invalid-feedback">Username is required</div>
            )}
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "form-control" + (submitted && !password ? " is-invalid" : "")
              }
            />
            {submitted && !password && (
              <div className="invalid-feedback">Password is required</div>
            )}
            <button className={styles.button}>Sign In</button>
            <Link to="/register" className="">
              <button className={styles.button} id="signUp">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
