import "./ConnectPeople.css";
import user1 from "../../assets/user1.jpg";
import user8 from "../../assets/user8.jpeg";
import user7 from "../../assets/user7.jpeg";
import user6 from "../../assets/user6.jpeg";

function ConnectPeople() {
  const Connections = [
    {
      id: 1,
      userPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALA1-fByzhqwLSRSXlfrqdpp-1e9msRxsrg&usqp=CAU",
      userName: "Christina Joseph",
      userDesc: "Data Analyst || Advance Excel || Python || SQL ",
    },
    {
      id: 2,
      userPic:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      userName: "Rahul Kumar",
      userDesc: " Frontend Dev || Java Developer        || SQL ",
    },
    {
      id: 3,
      userPic:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      userName: "Jake Steele",
      userDesc: "Software Analyst || SQL ",
    },
    {
      id: 4,
      userPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE6_9cuDwma2AaFeggMh0c-v5JfFSpPkzSA&usqp=CAU",
      userName: "Vivek Singh",
      userDesc: "Technical Intern Analyst || Python  ",
    },
    {
      id: 5,
      userPic:
        "https://media.istockphoto.com/id/1369917172/photo/young-woman-in-office-working-on-laptop-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=JRsb70qVA9lIJahVCFgnRdjeSl9gZqang8siOl4sK5Q=",
      userName: "Neha Patil",
      userDesc: "Software Developer   ",
    },
    {
      id: 6,
      userPic:
        "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fHww",
      userName: "Angelina Flynn",
      userDesc: "Backend Developer || Advance Java || Hibernate || MySQL ",
    },
    {
      id: 7,
      userPic:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      userName: "Shreya Ghodawat",
      userDesc: "Data Administrator || Python || SQL ",
    },
    {
      id: 8,
      userPic:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      userName: "Harsh Bagwan",
      userDesc: "Network Analyst || Networking  ",
    },
  ];

  return (
    <div className="ConnectPeople">
      <h1>People you may know</h1>
      <div className="connectCards">
        {Connections.map((item) => (
          <div className="connections" key={item.id}>
            <img src={item.userPic} alt={item.userName} />
            <h2>{item.userName}</h2>
            <p>{item.userDesc}</p>
            <button className="accept">Connect +</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectPeople;
