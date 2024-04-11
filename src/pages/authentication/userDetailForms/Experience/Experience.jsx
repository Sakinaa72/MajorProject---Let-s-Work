import "./experience.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postExperience } from "../../../../http/post";

function Experience() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    companyName: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
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
    isPending: experienceIsPending,
    isError: experienceIsError,
    error: experienceError,
    reset: experienceReset,
    mutate: experienceMutate,
  } = useMutation({
    // mutationKey: ["signup-user"],
    mutationFn: postExperience,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/Skills");
    },
  });

  useEffect(() => {
    experienceReset();
    // eslint-disable-next-line
  }, [experienceError, experienceIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    experienceMutate({
      companyName: user.companyName,
      title: user.title,
      location: user.location,
      startDate: user.startDate,
      endDate: user.endDate,
    });
  };

  return (
    <div className="experience">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
        <h3>
          Unlock 500+ jobs from top Companies and recieve direct calls from HRs
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Do you have work experience ?</h1>

        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={user.companyName}
          onChange={handleInput}
          required
        />

        <label htmlFor="title"> Title/Role</label>
        <input
          type="text"
          name="title"
          id="title"
          value={user.title}
          onChange={handleInput}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={user.location}
          onChange={handleInput}
          required
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          // pattern="\d{4}-\d{2}-\d{2}"
          // placeholder="YYYY-MM-DD"
          name="startDate"
          id="startDate"
          onChange={handleInput}
          value={user.startDate}
          required
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          // pattern="\d{4}-\d{2}-\d{2}"
          // placeholder="YYYY-MM-DD"
          name="endDate"
          id="endDate"
          onChange={handleInput}
          value={user.endDate}
          required
        />

        <button id="exp-btn" type="submit">
          <span>Next</span>
          {experienceIsPending ? "loading..." : ""}
        </button>
      </form>
    </div>
  );
}

export default Experience;

{
  /* <span>Profile Summary</span> */
}
{
  /* <textarea name="" id="" cols="20" rows="10"></textarea> */
}
