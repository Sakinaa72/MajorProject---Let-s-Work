import "./TopCompanies.css";
import { useState } from "react";
import { SliderData } from "./SliderData.jsx";
import forward from "../../../assets/forward.png";
import backward from "../../../assets/back.png";

function TopCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < SliderData.length ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : SliderData.length - 3
    );
  };

  return (
    <div className="topcompanies">
      <h1>Job Openings in Top Companies</h1>
      <section className="slider-container">
        <img src={backward} onClick={prevSlide} alt="backward" />

        <div className="slider">
          {SliderData.slice(currentIndex, currentIndex + 4).map((item) => (
            <div className="slide" key={item.id}>
              <img src={item.companyImg} alt="" />
              <h3>{item.companyName}</h3>
              <p>{item.companyDesc}</p>
              <button>View jobs </button>
            </div>
          ))}
        </div>
        <img src={forward} onClick={nextSlide} alt="forward" />
      </section>
    </div>
  );
}

export default TopCompanies;
