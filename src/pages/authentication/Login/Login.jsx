import { useState, useEffect } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postLogin } from "../../../http/post";
// const URL = `api/user/authenticate/signin`;

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const {
    isPending: loginIsPending,
    isError: loginIsError,
    error: loginError,
    reset: loginReset,
    mutate: loginMutate,
  } = useMutation({
    mutationKey: ["signin-user"],
    mutationFn: postLogin,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/RootLayout");
    },
  });

  useEffect(() => {
    loginReset();
    // eslint-disable-next-line
  }, [loginError, loginIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginMutate({
      userEmail: user.userEmail,
      userPassword: user.userPassword,
    });
  };

  return (
    <div className="login">
      <div className="authSideBar">
        <h1>
          Let's <br /> Work
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Log IN</h1>

        <label htmlFor="useremail"></label>
        <input
          type="email"
          name="userEmail"
          id="useremail"
          value={user.userEmail}
          placeholder="Enter Email"
          onChange={handleInput}
          required
        />

        <label htmlFor="userpassword"></label>
        <input
          type="password"
          name="userPassword"
          id="userpassword"
          value={user.userPassword}
          placeholder="Enter Password"
          onChange={handleInput}
          required
        />

        <button type="submit" id="btn">
          <span>Submit</span>
          {loginIsPending ? "loading" : ""}
        </button>
        <p>
          Don't have an account? <NavLink to="/Signin"> SignIn </NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
