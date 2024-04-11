import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./feedback.css";

function FeedBack() {
  return (
    <>
      <NavBar />
      <div className="feedback">
        {/* <div className="sidebar">
          <h1>Let's Work</h1>
        </div> */}
        <form>
          <h1>FeedBack Form</h1>

          <label htmlFor="userName">Full Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            //   value={""}
            //   onChange={""}
          />

          <label htmlFor="feedbackContent">FeedBack Please!</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            //   value={""}
            //   onChange={""}
          ></textarea>

          <button>
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default FeedBack;
