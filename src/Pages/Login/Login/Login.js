import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const { signInUsingGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="pt-5">
      <div className="m-5 w-25 mx-auto bg-warning rounded shadow shadow-lg">
        <span className="p-5 m-5"></span>
        <h1 className="m-2">Sign In</h1>
        <h6 className="mb-5">Sign-in to unlock more options</h6>
        <button className="mb-5 btn btn-success" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
