import React from "react";
import "./OrgHomePage.css";
import OrgHomeBanner from "../../assets/OrgHomeBanner.png";
import { NavLink } from "react-router-dom";

function OrgHomePage() {
  return (
    <div>
      <section className="OrgHome">
        <div className="content">
          <h2>Let's Work Job Portal : Start Hiring</h2>
          <h3>
            Discover Best Talents and Right Candidate for your Organization{" "}
          </h3>
          <button>
            <NavLink to="/AddJobs">Start Hiring</NavLink>
          </button>
        </div>
        <div className="OrgHomeBanner">
          <img src={OrgHomeBanner} alt="" />
        </div>
      </section>
    </div>
  );
}

export default OrgHomePage;
