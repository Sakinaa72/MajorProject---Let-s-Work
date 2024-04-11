import "./OrgSignIn.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { NavLink } from "react-router-dom";

import { postOrgSignIn } from "../../../../http/post";

function OrgSignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    organizationName: "",
    organizationEmail: "",
    organizationPassword: "",
    organizationPhoneNumber: "",
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
    isPending: organizationIsPending,
    isError: organizationIsError,
    error: organizationError,
    reset: organizationReset,
    mutate: organizationMutate,
  } = useMutation({
    // mutationKey: ["signup-user"],
    mutationFn: postOrgSignIn,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/OrgProfileForm");
    },
  });

  useEffect(() => {
    organizationReset();
    // eslint-disable-next-line
  }, [organizationError, organizationIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    organizationMutate({
      organizationName: user.organizationName,
      organizationEmail: user.organizationEmail,
      organizationPassword: user.organizationPassword,
      organizationPhoneNumber: user.organizationPhoneNumber,
    });
  };

  return (
    <div className="organization">
      <div className="sideBar">
        <h1>Let's Work</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in as Organisation</h1>

        <label htmlFor="organizationName">Name of Organization</label>
        <input
          type="text"
          name="organizationName"
          id="organizationName"
          onChange={handleInput}
          value={user.organizationName}
        />

        <label htmlFor="organizationEmail">Official Email</label>
        <input
          type="email"
          name="organizationEmail"
          id="organizationEmail"
          onChange={handleInput}
          value={user.organizationEmail}
        />

        <label htmlFor="organizationPassword">Password</label>
        <input
          type="password"
          name="organizationPassword"
          id="organizationPassword"
          onChange={handleInput}
          value={user.organizationPassword}
        />

        <label htmlFor="organizationPhoneNumber">Phone Number</label>
        <input
          type="number"
          name="organizationPhoneNumber"
          id="organizationPhoneNumber"
          onChange={handleInput}
          value={user.organizationPhoneNumber}
        />

        <button type="submit">
          <span>Submit</span>
        </button>
        <p className="redirectToUser">
          Sign in as <NavLink to="/Signin">User</NavLink>
        </p>
      </form>
    </div>
  );
}

export default OrgSignIn;
