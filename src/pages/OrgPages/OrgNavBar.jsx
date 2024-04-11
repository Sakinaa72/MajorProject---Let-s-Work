import React from "../../components/navbar/navbar.scss";
import { NavLink } from "react-router-dom";
import userImg from "../../assets/defaultUserImg.jpeg";

function OrgNavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Let's Work</span>
      </div>
      <div className="nav">
        <ul>
          <NavLink to="/OrgRootLayout">Home</NavLink>
          <NavLink to="/AddJobs">Add Job</NavLink>
          <NavLink to="/ReviewApplication"> Review Applications</NavLink>
          <NavLink to="/OrgProfile">
            Profile <img src={userImg} alt="" />
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default OrgNavBar;
