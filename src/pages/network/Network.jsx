import "./network.css"
import Navbar from "../../components/navbar/NavBar"
import Footer from "../../components/Footer/Footer"
import user from "../../assets/user-avtar.png"
import ConnectPeople from "../../components/ConnectPeople/ConnectPeople";

function Network() {
  return (
    <>
      <Navbar />
      <div>
        <div className="network">
          <div className="manageMyNetwork">
            <h1>Manage my network</h1>
            <ul>
              <div>
                <li>Connections</li>
                <span>24</span>
              </div>
              <div>
                <li>Contact</li>
                <span>78</span>
              </div>
              <h2>Follower & Following</h2>
              <div>
                <li>Groups</li>
                <span>11</span>
              </div>
              <div>
                <li>Events</li>
                <span>2</span>
              </div>
              <div>
                <li>Pages</li>
                <span>18</span>
              </div>
              <div>
                <li>Newsletters</li>
                <span>5</span>
              </div>
              <div>
                <li>Hashtags</li>
                <span>12</span>
              </div>
            </ul>
          </div>
          <div className="invitations">
            <div className="invitation_heading">
              <h1>Invitations</h1>
              <h2>See All 7</h2>
            </div>
            <div className="request">
              <div className="inviteUser">
                <img src={user} alt="" />
                <div>
                  <h3>Pradnya Patil</h3>
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div>
                <button className="ignore">Ignore</button>
                <button className="accept">Accept</button>
              </div>
            </div>
            <div className="request">
              <div className="inviteUser">
                <img src={user} alt="" />
                <div>
                  <h3>Abhishek Waghmare</h3>
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div>
                <button className="ignore">Ignore</button>
                <button className="accept">Accept</button>
              </div>
            </div>
            <div className="request">
              <div className="inviteUser">
                <img src={user} alt="" />
                <div>
                  <h3>Prajwal Kulkarni</h3>
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div>
                <button className="ignore">Ignore</button>
                <button className="accept">Accept</button>
              </div>
            </div>
            <div className="request">
              <div className="inviteUser">
                <img src={user} alt="" />
                <div>
                  <h3>Atharva Kulkarni</h3>
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div>
                <button className="ignore">Ignore</button>
                <button className="accept">Accept</button>
              </div>
            </div>
            <div className="request">
              <div className="inviteUser">
                <img src={user} alt="" />
                <div>
                  <h3>Sakina Rupani</h3>
                  <p></p>
                  <span></span>
                </div>
              </div>
              <div>
                <button className="ignore">Ignore</button>
                <button className="accept">Accept</button>
              </div>
            </div>
          </div>
        </div>
      <ConnectPeople />
      </div>

      <Footer />
    </>
  );
}

export default Network
