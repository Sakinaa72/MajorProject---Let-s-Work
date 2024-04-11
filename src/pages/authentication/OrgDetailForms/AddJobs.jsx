import Footer from "../../../components/Footer/Footer";
import OrgNavBar from "../../OrgPages/OrgNavBar";
import "./AddJobs.css";

function AddJobs() {
  return (
    <div className="addjob">
      <OrgNavBar />
      <form>
        <h1>Add Job Description</h1>
        <div>
          <label htmlFor="">Organization Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Job Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Job Description</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Requirements</label>
          <input type="text" />
        </div>
        <section>
          <div>
            <label htmlFor="">Salary</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Type</label>
            <input type="text" />
          </div>
        </section>
        <button>Add Job</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddJobs;
