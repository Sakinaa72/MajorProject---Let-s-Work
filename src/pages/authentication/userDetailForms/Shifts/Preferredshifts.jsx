import "./Preferredshifts.css";

function Preferredshifts() {
  return (
    <div className="shift">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
        <h3>
          Unlock 500+ jobs from top Companies and recieve direct calls from HRs
        </h3>
      </div>
      <section>
        <h1>Preferred work type</h1>

        <h4>Preffered employement type</h4>
        <div>
          <label htmlFor="full">Full Time</label>

          <input
            type="checkbox"
            name="full"
            id="full"
            placeholder="Full Time"
          />
        </div>
        <div>
          <label htmlFor="part">Part Time</label>
          <input
            type="checkbox"
            name="part"
            id="part"
            placeholder="Part Time"
          />
        </div>

        <h4>Preffered workplace</h4>

        <div>
          <label htmlFor="full"> Hybrid</label>

          <input type="checkbox" name="" id="" placeholder="Hybrid" />
        </div>
        <div>
          <label htmlFor="full"> Work From Office</label>

          <input type="checkbox" name="" id="" placeholder="Work from office" />
        </div>
        <div>
          <label htmlFor="full"> Work From Home</label>

          <input type="checkbox" name="" id="" placeholder="Work from Home" />
        </div>

        <h4>Preffered shift</h4>

        <div>
          <label htmlFor="full">Day Shift</label>

          <input type="checkbox" name="" id="" placeholder="Day Shift" />
        </div>
        <div>
          <label htmlFor="full">Night Shift</label>

          <input type="checkbox" name="" id="" placeholder="Night Shift" />
        </div>

        <button id="shift-btn">Next</button>
      </section>
    </div>
  );
}

export default Preferredshifts;
