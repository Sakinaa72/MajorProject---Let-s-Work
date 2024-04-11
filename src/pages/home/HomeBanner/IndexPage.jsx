import "./home.css";
import homebanner from "../../../assets/homeimg.png";

function IndexPage() {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>INDIA'S #1 JOB PLATFORM</h1>
          <h2>Let's Work Job Portal : Your job Search ends here</h2>
          <h3>Discover 50 lakh+ career opportunities</h3>
        </div>
        <div className="input-content">
          <input
            id="input-search"
            type="text"
            placeholder="Search jobs by 'skill'"
          />
          <input
            id="input-city"
            type="text"
            placeholder="Search for an area or city"
          />
          <button className="search-btn">Search jobs</button>
        </div>
        <div className="home-banner">
          <img src={homebanner} alt="" />
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
