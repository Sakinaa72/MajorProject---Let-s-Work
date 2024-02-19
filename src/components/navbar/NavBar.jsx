import "./navbar.scss";
import logo from "../../assets/Logo.png";
import userImg from "../../assets/defaultUserImg.jpeg";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Let's Work</span>
      </div>
      <div className="nav">
        <ul>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/Jobs" >Jobs</NavLink>
          <NavLink to="/Notification" >Notification</NavLink>
          <NavLink to="/Network" >Network</NavLink>
          <NavLink to="/Blog" >Blog</NavLink>
          <NavLink to="/AboutUs" >About Us</NavLink>
          <NavLink to="/Profile" > Me <img src={userImg} alt="" /></NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
