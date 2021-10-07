import React from "react";
import SignComponent from "../components/sign-comp/sign-comp";
import logo from "../assests/images/task.svg";
import { Link } from "react-router-dom";

const propObject = {
  name: "Sign In",
  helperTextPassword: "",
  helperTextUsername: "",
  accountExists: "Don't have an account? Sign up",
  href: "/signup",
};

const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        backgroundColor: "#926E6F",
      }}
    >
      <Link to="/">
        <img
          style={{
            alignSelf: "flex-start",
            width: "100px",
            height: "100px",
            margin: "70px",
          }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div style={{ alignSelf: "center", marginRight: "70px" }}>
        <SignComponent
          title={propObject.name}
          helperTextUsername={propObject.helperTextUsername}
          helperTextPassword={propObject.helperTextPassword}
          accountExists={propObject.accountExists}
          href={propObject.href}
        />
      </div>
    </div>
  );
};

export default SignInPage;
