import "./Education.css";
import "../AboutMe/AboutMe.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postEducation } from "../../../../http/post";

function Education() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    schoolName: "",
    secondarySchoolName: "",
    collegeName: "",
    degree: "",
    fieldOfStudy: "",
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
    isPending: educationIsPending,
    isError: educationIsError,
    error: educationError,
    reset: educationReset,
    mutate: educationMutate,
  } = useMutation({
    // mutationKey: ["signup-user"],
    mutationFn: postEducation,
    onSuccess: (data) => {
      toast.success(200, { description: data.message });
      navigate("/Experience");
      console.log(postEducation);
    },
  });

  useEffect(() => {
    educationReset();
    // eslint-disable-next-line
  }, [educationError, educationIsError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    educationMutate({
      schoolName: user.schoolName,
      secondarySchoolName: user.secondarySchoolName,
      collegeName: user.collegeName,
      degree: user.degree,
      fieldOfStudy: user.fieldOfStudy,
    });
  };

  return (
    <div className="Education">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
        <h3>
          Unlock 500+ jobs from top Companies and recieve direct calls from HRs
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Educational Details</h1>
        <h4>You are few steps away...</h4>
        <label htmlFor="schoolName"></label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          placeholder="Enter Your School Name"
          value={user.schoolName}
          onChange={handleInput}
          required
        />
        <label htmlFor="secondarySchoolName"></label>
        <input
          type="text"
          name="secondarySchoolName"
          id="secondarySchoolName"
          placeholder="Enter Your Secondary School Name"
          value={user.secondarySchoolName}
          onChange={handleInput}
          required
        />
        <label htmlFor="collegeName"></label>
        <input
          type="text"
          name="collegeName"
          id="collegeName"
          placeholder="Enter Your College Name"
          value={user.collegeName}
          onChange={handleInput}
          required
        />
        <label htmlFor="degree"></label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree"
          value={user.degree}
          onChange={handleInput}
          required
        />
        <label htmlFor="fieldOfStudy"></label>
        <input
          type="text"
          name="fieldOfStudy"
          id="fieldOfStudy"
          placeholder="Enter Field of Study"
          value={user.fieldOfStudy}
          onChange={handleInput}
          required
        />
        <button id="edu-btn">
          <span>Next</span>
          {educationIsPending ? "loading" : ""}
        </button>
      </form>
    </div>
  );
}

export default Education;
