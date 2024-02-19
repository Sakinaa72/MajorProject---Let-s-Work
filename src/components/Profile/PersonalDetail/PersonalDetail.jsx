import "./PersonalDetail.css";

function PersonalDetail() {
  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <div className="personal-detail">
        <span>Gender</span>
        <p>Female</p>
      </div>
      <div className="personal-detail">
        <span>Year of Birth</span>
        <p>2003</p>
      </div>
      <div className="personal-detail">
        <span>Category</span>
        <p>Gen</p>
      </div>
      <div className="personal-detail">
        <span>Have you taken a career break ?</span>
        <p>NO</p>
      </div>
      <div className="personal-detail">
        <span>Resident Status</span>
        <p>India</p>
      </div>
      <div className="personal-detail">
        <span>Nationality</span>
        <p>Indian</p>
      </div>
    </div>
  );
}

export default PersonalDetail;
