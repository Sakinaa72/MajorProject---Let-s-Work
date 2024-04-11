import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import "./userDetailForm.css";
import AddLanguage from "./Language/AddLanguage";
import Preferredshifts from "./Shifts/Preferredshifts";
import AddRole from "./roles/AddRole";

function UserDetailForm() {
  return (
    <div className="userDetailForm">
      <div id="authForm">
        {/* <SignIn /> */}
        {/* <Login /> */}
        {/* <AboutMe /> */}
        <Education />
        <Experience />
        <Skills />
        <AddRole />
      </div>
    </div>
  );
}

export default UserDetailForm;
