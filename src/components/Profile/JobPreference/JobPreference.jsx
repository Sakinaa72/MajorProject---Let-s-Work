import "./JobPreference.css";

function JobPreference() {
  return (
    <div className="job-preference">
      <h1>Job Preferences</h1>
      <div>
        <div className="preference">
          <span>Preferred Industry</span>
          <p>It/computers - Software</p>
        </div>
        <div className="preference">
          <span>Preferred Department/Function</span>
          <p>IT/Software Development - Other</p>
        </div>
        <div className="preference">
          <span>Preferred Role</span>
          <p>Software Developer</p>
        </div>
        <div className="preference">
          <span>Employement Type</span>
          <p>Full Time</p>
        </div>
        <div className="preference">
          <span>Preferred Workplace</span>
          <p>Work From Home</p>
        </div>
        <div className="preference">
          <span>Preferred Location</span>
          <p>Pune</p>
        </div>
      </div>
    </div>
  );
}

export default JobPreference;
