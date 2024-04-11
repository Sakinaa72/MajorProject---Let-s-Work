import "./AddRole.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postAddRole } from "../../../../http/post";

function AddRole() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    resume: "",
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
    isPending: addRoleIsPending,
    isError: addRoleIsError,
    error: addRoleError,
    reset: addRoleReset,
    mutate: addRoleMutate,
  } = useMutation({
    // mutationKey: ["signup-user"],
    mutationFn: postAddRole,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      // navigate("/AddRole");
    },
  });

  useEffect(() => {
    addRoleReset();
    // eslint-disable-next-line
  }, [addRoleError, addRoleIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    addRoleMutate({
      resume: user.resume,
    });
  };

  return (
    <div className="addrole">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Upload your resume!</h2>
        <div className="gender">
          <button>Upload Resume</button>
          <button>Skip</button>
        </div>
        <button id="role-btn">
          {addRoleIsPending ? "loading.." : ""}
          Next
        </button>
      </form>
    </div>
  );
}

export default AddRole;
