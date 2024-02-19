import "./PopularSearch.css";
import PS1 from "../../../assets/PS1.png";
import PS2 from "../../../assets/PS2.png";
import PS3 from "../../../assets/PS3.png";
import PS4 from "../../../assets/PS4.png";
import PS5 from "../../../assets/PS5.png";

function PopularSearch() {
  return (
    <div className="popular-searches">
      <section>
        <div className="popular-search single-box">
          <h1>Popular Searches on Let's Work</h1>
        </div>
        <div className="popular-search">
          <p>TRENDING AT #1</p>
          <span>Jobs for Freshers</span>
          <button>View all </button>
          <img id="ps1" src={PS1} alt="" />
        </div>
        <div className="popular-search">
          <p>TRENDING AT #2</p>
          <span>Work From Home</span>
          <button>View all </button>
          <img id="ps2" src={PS2} alt="" />
        </div>
        <div className="popular-search">
          <p>TRENDING AT #3</p>
          <span>Part time Jobs</span>
          <button>View all </button>
          <img id="ps3" src={PS3} alt="" />
        </div>
        <div className="popular-search">
          <p>TRENDING AT #4</p>
          <span>Jobs for Women</span>
          <button>View all </button>
          <img id="ps4" src={PS4} alt="" />
        </div>
        <div className="popular-search">
          <p>TRENDING AT #5</p>
          <span>International Jobs</span>
          <button>View all </button>
          <img id="ps5" src={PS5} alt="" />
        </div>
      </section>
    </div>
  );
}

export default PopularSearch;
