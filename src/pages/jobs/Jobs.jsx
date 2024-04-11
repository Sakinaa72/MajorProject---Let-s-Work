import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./jobs.scss";

function Jobs() {
  const jobs = [
    {
      id: 2,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 3,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 4,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 5,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 6,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
    {
      id: 7,
      company: "India Bison",
      position: "Front End Web Developer",
      type: "Remote",
      package: "$200k- $400k",
      apply: "Easy Apply",
      date: "6d",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="job">
        <div className="jobSearch">
          <span></span>
          <input type="text" placeholder="  Find your perfect job" />
          <input type="text" placeholder="Location" className="search" />
        </div>

        <section>
          <div className="jobs">
            {jobs.map((item) => (
              <div className="multipleJobs">
                <h4>{item.company}</h4>
                <h3>{item.position}</h3>
                <p>{item.type}</p>
                <span>{item.package}</span>
                <div className="date_apply">
                  <a href="#">{item.apply}</a>
                  <h5>{item.date}+</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="jobDetail">
            <div className="detail-intro">
              <div>
                <h4>Indian Bison</h4>
                <h3>Front End Developer</h3>
                <p>Remote</p>
              </div>
              <div>
                <button>Easy Apply</button>
              </div>
            </div>
            <section>
              <div>
                <h2>Responsibilities</h2>
                <ul>
                  <li>
                    Use a variety of programming languages to create
                    streamlined, user-friendly, interactions.
                  </li>
                  <li>
                    Maintain, enhance, and improve Freightcom platform and other
                    related web applications.
                  </li>
                  <li>
                    Work in multidisciplinary team including touchpoints with
                    backend developers, engineers, and marketing professionals.
                  </li>
                  <li>
                    Build best-in-class mock-ups and design prototypes for
                    collaborative review sessions.
                  </li>
                  <li>
                    Analyze and interpret feedback from various stakeholders of
                    the organization.
                  </li>
                  <li>
                    Contribute to the solutioning of improve practices and
                    problems.
                  </li>
                  <li>
                    Work in multidisciplinary team including touchpoints with
                    backend developers, engineers, and marketing professionals.
                  </li>
                  <li>
                    Build best-in-class mock-ups and design prototypes for
                    collaborative review sessions.
                  </li>
                </ul>

                <h2>Qualifications</h2>
                <ul>
                  <li>
                    Designing and crafting user interfaces using Angular(8+)
                  </li>
                  <li>Working knowledge in Typescript, Angular CLI and NPM</li>
                  <li>Strong knowledge in RxJS</li>
                  <li>
                    Strong Proficiency with Bootstrap(5+), JavaScript, HTML5,
                    CSS/SCSS
                  </li>
                  <li>
                    Experience with client-side architecture and design patterns
                  </li>
                  <li>
                    Experience with angular i18n or ngx-translate is an asset
                  </li>
                  <li>Experience with various IDEs such as Visual Studio</li>
                  <li>
                    Bachelors degree in Computer Engineering, Computer Science,
                    related field, or equivalent experience
                  </li>
                </ul>

                <h4>Salary</h4>
                <p>₹1,500,000.00 - ₹2,000,000.00 per year</p>

                <h4>Schedule</h4>
                <li>Monday to friday</li>
                <li>Weekend Availability</li>

                <h4>Education</h4>
                <p>Bachelor's (Required)</p>

                <h4>Experience</h4>
                <li>Typescript, Angular CLI and NPM: 3 years (Required)</li>
                <li>software development: 3 years (Required)</li>
                <li>HTML5: 3 years (Required)</li>

                <h4>Work Location: Remote</h4>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Jobs;
