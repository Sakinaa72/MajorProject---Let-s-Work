import Footer from "../../components/Footer/Footer";
import DetailProfile from "../../components/Profile/DetailProfile/DetailProfile";
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import NavBar from "../../components/navbar/NavBar";
import "./Profile.css";
function Profile() {
  return (
    <>
    <NavBar />
    <div className="profile">
      <UserProfile />
      <DetailProfile />
    </div>
    <Footer />
    </>
  );
}

export default Profile;
