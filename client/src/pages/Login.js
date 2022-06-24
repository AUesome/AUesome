// import React from "react";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { Container as ContainerBase } from "components/misc/Layouts";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import illustration from "images/login-illustration.svg";
// import logo from "images/mini-auesome-logo.png";
// import googleIconImageSrc from "images/google-icon.png";
// import twitterIconImageSrc from "images/twitter-icon.png";
// import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

// const Container = tw(
//   ContainerBase
// )`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
// const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
// const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
// const LogoLink = tw.a``;
// const LogoImage = tw.img`h-12 mx-auto`;
// const MainContent = tw.div`mt-12 flex flex-col items-center`;
// const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
// const FormContainer = tw.div`w-full flex-1 mt-8`;

// const SocialButtonsContainer = tw.div`flex flex-col items-center`;
// const SocialButton = styled.a`
//   ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
//   .iconContainer {
//     ${tw`bg-white p-2 rounded-full`}
//   }
//   .icon {
//     ${tw`w-4`}
//   }
//   .text {
//     ${tw`ml-4`}
//   }
// `;

// const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
// const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

// const Form = tw.form`mx-auto max-w-xs`;
// const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
// const SubmitButton = styled.button`
//   ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
//   .icon {
//     ${tw`w-6 h-6 -ml-2`}
//   }
//   .text {
//     ${tw`ml-3`}
//   }
// `;
// const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
// const IllustrationImage = styled.div`
//   ${(props) => `background-image: url("${props.imageSrc}");`}
//   ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
// `;

// export default ({
//   logoLinkUrl = "#",
//   illustrationImageSrc = illustration,
//   headingText = "Sign In to AUesome",
//   socialButtons = [
//     {
//       iconImageSrc: googleIconImageSrc,
//       text: "Sign In With Google",
//       url: "https://google.com",
//     },
//     // {
//     //   iconImageSrc: twitterIconImageSrc,
//     //   text: "Sign In With Twitter",
//     //   url: "https://twitter.com"
//     // }
//   ],
//   submitButtonText = "Sign In",
//   SubmitButtonIcon = LoginIcon,
//   forgotPasswordUrl = "#",
//   signupUrl = "/signup",
// }) => (
//   <AnimationRevealPage>
//     <Container>
//       <Content>
//         <MainContainer>
//           <LogoLink href={logoLinkUrl}>
//             <LogoImage src={logo} />
//           </LogoLink>
//           <MainContent>
//             <Heading>{headingText}</Heading>
//             <FormContainer>
//               <SocialButtonsContainer>
//                 {socialButtons.map((socialButton, index) => (
//                   <SocialButton key={index} href={socialButton.url}>
//                     <span className="iconContainer">
//                       <img
//                         src={socialButton.iconImageSrc}
//                         className="icon"
//                         alt=""
//                       />
//                     </span>
//                     <span className="text">{socialButton.text}</span>
//                   </SocialButton>
//                 ))}
//               </SocialButtonsContainer>
//               <DividerTextContainer>
//                 <DividerText>Or Sign in with your e-mail</DividerText>
//               </DividerTextContainer>
//               <Form>
//                 <Input type="email" placeholder="Email" />
//                 <Input type="password" placeholder="Password" />
//                 <SubmitButton type="submit">
//                   <SubmitButtonIcon className="icon" />
//                   <span className="text">{submitButtonText}</span>
//                 </SubmitButton>
//               </Form>
//               <p tw="mt-6 text-xs text-gray-600 text-center">
//                 <a
//                   href={forgotPasswordUrl}
//                   tw="border-b border-gray-500 border-dotted"
//                 >
//                   Forgot Password ?
//                 </a>
//               </p>
//               <p tw="mt-8 text-sm text-gray-600 text-center">
//                 Dont have an account?{" "}
//                 <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
//                   Sign Up
//                 </a>
//               </p>
//             </FormContainer>
//           </MainContent>
//         </MainContainer>
//         <IllustrationContainer>
//           <IllustrationImage imageSrc={illustrationImageSrc} />
//         </IllustrationContainer>
//       </Content>
//     </Container>
//   </AnimationRevealPage>
// );

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import "../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import logo from "../images/logo.png";

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
