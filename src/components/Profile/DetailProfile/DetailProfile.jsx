import "./DetailProfile.css";
import ProfileSummary from "../ProfileSummary/ProfileSummary";
import WorkExperience from "../WorkExperience/WorkExperience";
import EducationDetails from "../EducationDetails/EducationDetails";
import Skills from "../Skills/Skills";
import JobPreference from "../JobPreference/JobPreference";
import PersonalDetail from "../PersonalDetail/PersonalDetail";
import Language from "../Language/Language";

function DetailProfile() {
  return (
    <div className="detail-profile-container">
      <ProfileSummary />
      {/* <div className="resume"></div> */}
      <WorkExperience />
      <EducationDetails />
      <Skills />
      <JobPreference />
      <PersonalDetail />
      <Language />
      {/*      
      
      <div className="languages"></div> */}
    </div>
  );
}

export default DetailProfile;
