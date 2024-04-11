import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import "./SignIn.css";
import { postSignup } from "../../../http/post";

// const URL = `api/user/authenticate/signup`;

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    userLocation: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const {
    isPending: signupIsPending,
    isError: signupIsError,
    error: signupError,
    reset: signupReset,
    mutate: signupMutate,
  } = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: postSignup,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/Education");
    },
  });

  useEffect(() => {
    signupReset();
    // eslint-disable-next-line
  }, [signupError, signupIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log({
    //   userEmail: user.userEmail,
    //   userLocation: user.userLocation,
    //   username: user.userName,
    //   userPassword: user.userPassword,
    // });

    signupMutate({
      userEmail: user.userEmail,
      userLocation: user.userLocation,
      userName: user.userName,
      userPassword: user.userPassword,
    });
  };

  return (
    // <Router>
    <div>
      <div className="signin">
        <div className="authSideBar">
          <h1>
            Let's <br /> Work
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="authform">
          <h1>Sign IN</h1>

          <label htmlFor="username"></label>
          <input
            type="text"
            name="userName"
            id="name"
            placeholder="Enter Your Name"
            value={user.userName}
            onChange={handleInput}
            required
          />

          <label htmlFor="userlocation"></label>
          <input
            type="text"
            name="userLocation"
            id="name"
            placeholder="Enter Your Location"
            value={user.userLocation}
            onChange={handleInput}
            required
          />

          <label htmlFor="useremail"></label>
          <input
            type="email"
            name="userEmail"
            id="email"
            placeholder="Enter Email"
            value={user.userEmail}
            onChange={handleInput}
            required
          />

          <label htmlFor="userpassword"></label>
          <input
            type="password"
            name="userPassword"
            id="password"
            placeholder="Enter Password"
            value={user.userPassword}
            onChange={handleInput}
            required
          />

          <button
            type="submit"
            className="sign-btn"
            // style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <span>Sign In</span>
            {signupIsPending ? "loading" : ""}
          </button>

          <p>
            Already have an account? <NavLink to="/Login"> Login </NavLink>{" "}
          </p>
          <p className="redirectToUser">
            Sign in as <NavLink to="/OrgSignIn">Organisation</NavLink>
          </p>
        </form>
      </div>
    </div>
    // </Router>
  );
};

export default SignIn;
