import React from "react";
import Sakina from "../../assets/Sakina.jpg";
import Atharva from "../../assets/atharva.jpg";
import Prajwal from "../../assets/prajwal.jpg";

function MiddleSection() {
  return (
    <div className="AboutUS">
      <div className="middle_content">
        {/* <p>
          Let's Work has been digitally transforming the market with its
          customized solutions and as a leading software development company, it
          majorly focuses on IT outsourcing, consulting and software development
          services. Our strong demeanour as a business leader has paved the
          success path for many enterprises across global locations.The
          acknowledgement goes to our long-lasting professional associations
          with the pivotal founders and leaders that are pillars to the business
          success journey.
        </p> */}
      </div>
      <div>
        <p className="path_finder">Meet our Path Finders</p>
        <p className="line2">
          Adept, qualified and knowledgeable technocrats are cornerstones to
          Let's Work's success
        </p>
      </div>

      <div className="leadership-container">
        <div className="leadership-card">
          <div className="leadership-image-container">
            <img src={Prajwal} className="leadership-image" />
          </div>
          <div className="leadership-name-container">
            <h3 className="leadership-name">Prajwal Kulkarni</h3>
            <p className="leadership-position">Back-end Developer</p>
          </div>
          <p className="leadership-bio">
            His strong business acumen and strategy in the technology arena
            makes him lead our business operations department.
          </p>
        </div>
        <div className="leadership-card">
          <div className="leadership-image-container">
            <img src={Atharva} alt="" className="leadership-image" />
          </div>
          <div className="leadership-name-container">
            <h3 className="leadership-name">Atharv Kulkarni</h3>
            <p className="leadership-position">Front-end Developer</p>
          </div>
          <p className="leadership-bio">
            His strong business acumen and strategy in the technology arena
            makes him lead our business operations department.
          </p>
        </div>
        <div className="leadership-card">
          <div className="leadership-image-container">
            <img src={Sakina} alt="Shital Patel" className="leadership-image" />
          </div>
          <div className="leadership-name-container">
            <h3 className="leadership-name">Sakina Rupani</h3>
            <p className="leadership-position">Full-Stack Developer</p>
          </div>
          <p className="leadership-bio">
            she is adept in managing end to end IT development, coordination,
            planning and integration for a variety of global projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
