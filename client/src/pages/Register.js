import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import "../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import logo from "../images/logo.png";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/dashboard");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    // <div className="register-screen">
    //   <form <onSubmit={registerHandler}> className="register-screen__form">
    //     <h3 className="register-screen__title">Register</h3>
    //     {error && <span className="error-message">{error}</span>}
    //     <div className="form-group">
    //       <label htmlFor="name">Username:</label>
    //       <input
    //         type="text"
    //         required
    //         id="name"
    //         placeholder="Enter username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         required
    //         id="email"
    //         placeholder="Email address"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="password"
    //         autoComplete="true"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="confirmpassword">Confirm Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="confirmpassword"
    //         autoComplete="true"
    //         placeholder="Confirm password"
    //         value={confirmpassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Register
    //     </button>

    //     <span className="register-screen__subtext">
    //       Already have an account? <Link to="/login">Login</Link>
    //     </span>
    //   </form>
    // </div>
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic">
            <Link to="/">
              <div style={{ fontSize: "13px" }} className="txt2">
                <i
                  className="fa fa-long-arrow-left"
                  style={{ marginRight: "5px" }}
                  aria-hidden="true"
                />
                Return Home
              </div>
            </Link>
            <img src={logo} alt="AUesome Logo" style={{ marginTop: "150px" }} />
          </div>
          <form
            className="login100-form validate-form"
            // action="/login"
            // method="POST"
            onSubmit={registerHandler}
          >
            <span className="login100-form-title"> AUesome Sign Up </span>
            {error && <span className="error-message">{error}</span>}
            <a
              href="/auth/google"
              role="button"
              style={{ height: "50px" }}
              type="button"
              className="login-with-google-btn"
            >
              Sign up with Google
            </a>
            <div className="special-line">
              <span>Or use your email</span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                type="text"
                required
                id="name"
                className="input100"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true" />
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                type="password"
                required
                className="input100"
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                type="password"
                required
                id="confirmpassword"
                className="input100"
                autoComplete="true"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Sign Up
              </button>
            </div>
            {/* <div class="text-center" style={{ paddingTop: "12px" }}>
              <Link to="/forgotpassword">
                <span class="txt1"> Forgot </span>
                <span class="txt1"> Password </span>
              </Link>
            </div> */}
            <div className="text-center" style={{ paddingTop: "30px" }}>
              <a className="txt2" href="/login">
                Login to an account
                <i
                  className="fa fa-long-arrow-right"
                  style={{ marginLeft: "5px" }}
                  aria-hidden="true"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
