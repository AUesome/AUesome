import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import "./LoginScreen.css";
import "./Login.css";
// import "./vendors/select2/select2.min.css";
// import "./vendors/css-hamburgers/hamburgers.min.css";
// import "./vendors/animate/animate.css";
// import "./vendors/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import logo from "../../images/logo.png";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/dashboard");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      // console.log("fetched auth");
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
    // <div className="login-screen">
    //   <form onSubmit={loginHandler} className="login-screen__form">
    //     <h3 className="login-screen__title">Login</h3>
    //     {error && <span className="error-message">{error}</span>}
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         required
    //         id="email"
    //         placeholder="Email address"
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //         tabIndex={1}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">
    //         Password:{" "}
    //         <Link to="/forgotpassword" className="login-screen__forgotpassword">
    //           Forgot Password?
    //         </Link>
    //       </label>
    //       <input
    //         type="password"
    //         required
    //         id="password"
    //         autoComplete="true"
    //         placeholder="Enter password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //         tabIndex={2}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Login
    //     </button>

    //     <span className="login-screen__subtext">
    //       Don't have an account? <Link to="/register">Register</Link>
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
            <img src={logo} alt="AUesome Logo" style={{ marginTop: "60px" }} />
          </div>
          <form
            className="login100-form validate-form"
            // action="/login"
            // method="POST"
            onSubmit={loginHandler}
          >
            <span className="login100-form-title"> AUesome Login </span>
            {error && <span className="error-message">{error}</span>}
            <a
              href="/auth/google"
              role="button"
              type="button"
              className="login-with-google-btn"
              style={{ height: "50px" }}
            >
              Sign in with Google
            </a>
            <div className="special-line">
              <span>Or use your email</span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input100"
                tabIndex={1}
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
                name="password"
                className="input100"
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Login
              </button>
            </div>
            <div class="text-center" style={{ paddingTop: "12px" }}>
              <Link to="/forgotpassword">
                <span class="txt1"> Forgot Password </span>
              </Link>
            </div>
            <div className="text-center" style={{ paddingTop: "30px" }}>
              <Link className="txt2" to="/register">
                Create an Account
                <i
                  className="fa fa-long-arrow-right"
                  style={{ marginLeft: "5px" }}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
