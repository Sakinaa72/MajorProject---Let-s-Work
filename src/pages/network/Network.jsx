import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./network.css";
// import { IoPeopleOutline } from "react-icons/io5";
// import Button from "@mui/material/Button";
// import { IoPersonOutline } from "react-icons/io5";
// import { MdGroups2 } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { RiPagesLine } from "react-icons/ri";
// import { FaRegNewspaper } from "react-icons/fa6";
// import { FaHashtag } from "react-icons/fa6";
// import { FaArrowUp } from "react-icons/fa";
// import { MdOutlineCancel } from "react-icons/md";

const Network = () => {
  return (
    <>
    <NavBar />
      <div className="main_container">
        <div className="left_side_bar">
          <div>
            <span className="left-box-text">Manage My Network</span>

            <div className="options">
              <span>
                {/* <IoPeopleOutline />  */}
                Connections
              </span>

              <span>
                {/* <IoPersonOutline />  */}
                Following & followers
              </span>

              <span>
                {/* <MdGroups2 /> */}
                 Groups
              </span>

              <span>
                {/* <SlCalender />  */}
                Events
              </span>

              <span>
                {/* <RiPagesLine />  */}
                pages
              </span>

              <span>
                {/* <FaRegNewspaper />  */}
                NewsLetters
              </span>

              <span>
                {/* <FaHashtag />  */}
                Hashtags
              </span>

              <span>
                <button className="showless_buttons">
                  Show less
                   {/* <FaArrowUp /> */}
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="main_content">

          <div className="top-sections">
            <span className="right-box-text">Invitation</span>
            <span>
              <button className="see_all_button">See all</button>
            </span>
          </div>

          <div className="invitation_div">

            <div className="image_div">
              <img src="/images/user_icon3.png" />
            </div>

            <div className="information_div">

              <span>Newsletter Daily</span>
              <span>
                <b>Atharv Kulkarni</b> invited you to subscribe to{" "}
                <b>Latest Job Updates</b>
              </span>

            </div>

            <div className="accept-ignore_button_div">

              <button className="ignore_button">Ignore</button>
              <button className="accept_button">Accept</button>

            </div>
          </div>
          <div className="invitation_div">
            <div className="image_div">
              <img src="/images/user_icon3.png" />
            </div>
            <div className="information_div">

              <span>Newsletter Daily</span>
              <span>
                <b>Atharv Kulkarni</b> invited you to subscribe to{" "}
                <b>Latest Job Updates</b>
              </span>

            </div>

            <div className="accept-ignore_button_div">
              <button className="ignore_button">Ignore</button>
              <button className="accept_button">Accept</button>
            </div>

          </div>
          
        </div>

        <div>
          <div className="people_you_may_know">
            <div className="top-sections">
              People You May Know From Shivaji University,Kolhapur
              <span>
                <button className="see_all_button">See all</button>
              </span>
            </div>

            <div className="people_cards">
              <div className="person1">
                <span className="cancell_icon">
                  <button className="cancell_icon_button">
                    {/* <MdOutlineCancel /> */}
                  </button>
                </span>
                <div>
                  <img src="/images/user_icon3.png" />
                </div>
                <div>
                  <a href="">
                    <b>Prathamesh sutar</b>
                  </a>
                </div>
                <div>
                  <a href="">Global Payroll specialist at Neeyamo</a>
                </div>
                <div>
                  <button className="follow_request_button">
                    {" "}
                    {/* <IoPersonOutline />  */}
                    + Connect
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Network;
