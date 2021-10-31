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
    <div className=" row pt-5">
      <div className="col-md-6 m-5 w-50 col-sm-12 mx-auto bg-warning rounded shadow shadow-lg">
        <div className="m-5">
          <h1 className="m-2">Sign In</h1>
          <h6 className="mb-5">Sign-in to unlock more options</h6>
        </div>
        <div>
          <button className="mb-5 btn btn-success" onClick={handleGoogleSignIn}>
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
