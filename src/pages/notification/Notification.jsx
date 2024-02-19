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
              <img src="/images/cognizant_logo.jpg" />
            </div>
            <div className="noti">
              Cognizant frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/deloitte_logo.jpg" />
            </div>
            <div className="noti">
              Deloitte frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/cognizant_logo.jpg" />
            </div>
            <div className="noti">
              Cognizant frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/cognizant_logo.jpg" />
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
            <div className="img_div">
              <img src="/images/cognizant_logo.jpg" />
            </div>
            <div className="noti">
              Cognizant frontend developr : 9 opportunities in pune.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/google.jpg" />
            </div>
            <div className="noti">
              Google has announced another round of layoffs across multiple
              divisons. see more news on the lates cuts.
            </div>
            <div className="noti_menu">
              <button>
                <CiMenuKebab />
              </button>
            </div>
          </div>
          <div className="main_content">
            <div className="img_div">
              <img src="/images/cognizant_logo.jpg" />
            </div>
            <div className="noti">
              Cognizant frontend developr : 9 opportunities in pune.
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
            <div className="img_div">
              <img src="/images/cognizant_logo.jpg" />
            </div>
            <div className="noti">
              Cognizant frontend developr : 9 opportunities in pune.
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
            <div className="img_div">
              <img src="/images/microsoft_logo.jpg" />
            </div>
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
