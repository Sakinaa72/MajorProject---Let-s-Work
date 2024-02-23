import "./ConnectPeople.css"
import user1 from "../../assets/user1.jpg"

function ConnectPeople() {

    const Connections  = [
        {
            id:1,
            userPic: "../../assets/user1.jpg",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:2,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:3,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:4,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:5,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:6,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:7,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        },
        {
            id:8,
            userPic: "user1",
            userName:"Ajay Patil",
            userDesc:"Data Analyst || Advance Excel || Python || SQL ",
        }
    ]

  return (
    <div className="ConnectPeople">
      <h1>People you may know</h1>
      <div className="connectCards">
        {Connections.map((item) => (
          <div className="connections" key={item.id}>
            <img src={user1} alt={item.userName} />
            <h2>{item.userName}</h2>
            <p>{item.userDesc}</p>
            <button className="accept">Connect +</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectPeople
