import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { NavLink } from "react-router-dom";
import "../authentication/OrgDetailForms/OrgSignIn/OrgSignIn.css";
import { postOrgProfileForm } from "../../http/post";

function OrgProfileForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    organizationIndustry: "",
    organizationDescription: "",
    organizationLocation: "",
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
    mutationFn: postOrgProfileForm,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/OrgRootLayout");
    },
  });

  useEffect(() => {
    organizationReset();
    // eslint-disable-next-line
  }, [organizationError, organizationIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    organizationMutate({
      organizationIndustry: user.organizationIndustry,
      organizationDescription: user.organizationDescription,
      organizationLocation: user.organizationLocation,
    });
  };
  return (
    <div className="organization">
      <div className="sideBar">
        <h1>Let's Work</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>One Step to go</h1>

        <label htmlFor="organizationIndustry">Industry</label>
        <input
          type="text"
          name="organizationIndustry"
          id="organizationIndustry"
          onChange={handleInput}
          value={user.organizationIndustry}
        />

        <label htmlFor="organizationDescription">
          Organization Description
        </label>
        <input
          type="text"
          name="organizationDescription"
          id="organizationDescription"
          onChange={handleInput}
          value={user.organizationDescription}
        />

        <label htmlFor="organizationLocation">Location</label>
        <input
          type="text"
          name="organizationLocation"
          id="organizationLocation"
          onChange={handleInput}
          value={user.organizationLocation}
        />

        <button type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}

export default OrgProfileForm;
