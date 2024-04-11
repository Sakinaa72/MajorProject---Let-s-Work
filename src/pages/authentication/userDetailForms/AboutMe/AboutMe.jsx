// import { useNavigate } from "react-router-dom";
// import "./AboutMe.css";
// import { useEffect, useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";

// function AboutMe() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     userName: "",
//     userEmail: "",
//   });

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const {
//     isPending: AboutMeIsPending,
//     isError: AboutMeIsError,
//     error: AboutMeError,
//     reset: AboutMeReset,
//     mutate: AboutMeMutate,
//   } = useMutation({
//     // mutationKey: [""],
//     mutationFn: "postAboutMe",
//     onSuccess: (data) => {
//       toast.success({ description: data.message });
//       navigate("/Education");
//     },
//   });

//   useEffect(() => {
//     AboutMeReset();
//     // eslint-disable-next-line
//   }, [AboutMeError, AboutMeIsError]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     AboutMeMutate({ userEmail: user.userEmail, userName: user.userName });
//   };
//   return (
//     <div className="aboutme">
//       <div id="aboutSideBar">
//         <h1>Let's Work</h1>
//         <h2>Complete your profile!</h2>
//         <h3>
//           Unlock 500+ jobs from top Companies and recieve direct calls from HRs
//         </h3>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <h1>About me</h1>

//         <label htmlFor="userName">Full name</label>
//         <input
//           type="text"
//           placeholder="e.g. Aman Singh"
//           name="userName"
//           id="name"
//           value={user.userName}
//           onChange={handleInput}
//           required
//         />

//         <label htmlFor="userEmail">Email</label>
//         <input
//           type="email"
//           placeholder="e.g. amansingh@gmail.com"
//           id="userEmail"
//           name="userEmail"
//           value={user.userEmail}
//           onChange={handleInput}
//           required
//         />

//         {/* <label>Date of Birth</label>
//         <input type="date" placeholder="Date of Birth" /> */}

//         {/* <span>Gender</span>
//         <div className="gender">
//           <button>Male</button>
//           <button>Female</button>
//         </div> */}
//         <button type="submit" id="about-btn">
//           <span>Next</span>
//           {AboutMeIsPending ? "loading" : ""}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AboutMe;

import React from "react";

function AboutMe() {
  return <div></div>;
}

export default AboutMe;
