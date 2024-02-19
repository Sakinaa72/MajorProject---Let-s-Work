import "./home.css";
import HomeProfile from "../../../components/homeProfile/HomeProfile";
import JobsForYou from "../../../components/jobsForYou/JobsForYou";
import Jobs from "../../jobs/Jobs";
import Profile from "../../profile/Profile";
import UserProfile from "../../../components/Profile/UserProfile/UserProfile";
import homebanner from "../../../assets/homeimg.png";
import PopularSearch from "../PopularSearch/PopularSearch";
import Reviews from "../Reviews/Reviews";
import TopCompanies from "../TopCompanies/TopCompanies";
import Footer from "../../../components/Footer/Footer";
import Network from "../../network/Network";
import Blog from "../../Blog/Blog";
function Home() {
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
      <PopularSearch />
      <TopCompanies />
      <Reviews />
      {/* <Footer /> */}
    </div>
    
    
  );
}

export default Home;
