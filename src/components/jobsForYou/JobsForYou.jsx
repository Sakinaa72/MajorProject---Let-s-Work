import "./JobsForYou.css";

function JobsForYou() {
  const job_section = [
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
    {
      id: 4,
      companyPic:
        "https://media.glassdoor.com/sql/995823/uplers-squarelogo-1574114285303.png",
      name: "Dynamic technologies",
      position: "Front-End Developer",
      location: "Remote",
      time: "30d+",
    },
  ];
  return (
    <div className="job_container">
      <h1>Jobs For You</h1>
      {job_section.map((item) => (
        <div className="company_details">
          <div className="company_name_img">
            <img src={item.companyPic} alt="" />
            <h4>{item.name}</h4>
          </div>
          <p>{item.position}</p>

          <div className="companies">
            <h5>{item.location}</h5>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
      <button>View All.. </button>
    </div>
  );
}

export default JobsForYou;
