import "./UserProfile.css";
import profileBanner from "../../../assets/profile-page-banner.png";
import userAvatar from "../../../assets/user-avtar.png";
import location from "../../../assets/icons8-location-50.png";
import buildings from "../../../assets/icons8-buildings-50.png";
import email from "../../../assets/icons8-email-50.png";
import call from "../../../assets/icons8-call-50.png";
import wallet from "../../../assets/icons8-wallet-50.png";
import briefcase from "../../../assets/icons8-briefcase-50.png";

function UserProfile() {
  return (
    <div className="profile-card-container">
      <img className="profileBanner" src={profileBanner} alt="" />
      <img className="userAvatar" src={userAvatar} alt="" />
      <div className="profile-name">Sakina Shabbir Rupani</div>
      <div className="profile-designation">Full Stack Developer</div>
      <div className="details">
        {" "}
        <img src={location} alt="" />
        Pune
      </div>

      <div className="profile-details">
        <div className="details">
          <img src={buildings} alt="" />
          <span>Bynamic Technologies</span>
        </div>
        <div className="details">
          <img src={briefcase} alt="" />
          <span> Exp: 2 Months</span>
        </div>
        <div className="details">
          <img src={wallet} alt="" />
          <span>Annual Salary: INR 20,000</span>
        </div>
        <div className="details">
          <img src={call} alt="" />
          <span>+91-9370604900</span>
        </div>
        <div className="details">
          <img src={email} alt="" />
          <span>sakiname72@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
