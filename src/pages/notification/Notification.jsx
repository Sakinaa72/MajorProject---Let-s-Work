import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import "./notification.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
const Notification = () => {
  return (
    <>
      <NavBar />
      <div className="main_div">
        <div className="left_div">
          <span>Manage your Notification</span>
          <div className="viewsetting">
            <span>View Setting</span>
          </div>
        </div>
        <div className="middle_div">
          <div className="main_content">
            <div className="img_div">
              <img src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bHRpbmF0aW9uYWwlMjBjb21wYW5pZXMlMjBsb2dvfGVufDB8fDB8fHww" />
            </div>
            <div className="noti">
              Wolkswagen frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fElUJTIwY29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div className="noti">
              Slack frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="https://images.unsplash.com/photo-1662947368907-808ab49b9495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="noti">
              Amazon Backend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div className="noti">
              View collaborative artical in Communication.How can you design
              effective communication for annual report ?
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>

          <div className="main_content">
            <div className="img_div"></div>
            <div className="noti">Let's connect with new people aound you!</div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ298ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="noti">
              Bond Street frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>

          <div className="main_content">
            <div className="img_div">
              <img src="/images/person.jpg" />
            </div>
            <div className="noti">
              People with similer intrests are following Dr.shalini lal. follow
              to see photos.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div"></div>
            <div className="noti">
              Ikea HR Manager : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/person.jpg" />
            </div>
            <div className="noti">
              People with similer intrests are following Dr.shalini lal. follow
              to see photos.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div"></div>
            <div className="noti">
              Microsoft reposted an update: Fantastic to be with Doug McMillion
              at #CES2024 today to talk about our longstanding partenership ,
              and how walmart is....
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
        </div>
        <div className="right_div">
          <img src="/images/try.png" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notification;
