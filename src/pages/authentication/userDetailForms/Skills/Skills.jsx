import "./Skills.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postSkills } from "../../../../http/post";

function Skills() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
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
    isPending: skillIsPending,
    isError: skillIsError,
    error: skillError,
    reset: skillReset,
    mutate: skillMutate,
  } = useMutation({
    // mutationKey: ["signup-user"],
    mutationFn: postSkills,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/RootLayout");
    },
  });

  useEffect(() => {
    skillReset();
    // eslint-disable-next-line
  }, [skillError, skillIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    skillMutate({
      name: user.name,
    });
  };

  return (
    <div className="addskills">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
        <h3>
          Unlock 500+ jobs from top Companies and recieve direct calls from HRs
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <h5>Complete your profile to explore similar jobs on Let's Work</h5>
        <h4>You are few steps away...</h4>
        <h1>Add Skills</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Communication"
          onChange={handleInput}
          value={user.name}
        />
        <p>Add between 4 to 10 skills to get noticed by HR</p>
        <button id="skill-btn" type="submit">
          <span>Next</span>
          {skillIsPending ? "loading..." : ""}
        </button>
      </form>
    </div>
  );
}

export default Skills;
