import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <section>
        <h1>Join the community of 5 crore satisfied job seekers...</h1>
      </section>
      <div className="users">
        <div className="user">
          <div className="user-info">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="star-review">
              <span>Sanjana Shah</span>
            </div>
          </div>
          <p>
            "Effortlessly streamlined job hunting with this app! Its intuitive
            interface makes searching for opportunities a breeze. With
            personalized recommendations and easy application tracking, landing
            your dream job is just a few taps away. A must-have for anyone
            navigating the competitive job market!"
          </p>
        </div>

        <div className="user">
          <div className="user-info">
            <img
              src="https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fjenil-ghevariya.png&w=1920&q=75"
              alt=""
            />
            <div className="star-review">
              <span>Abhijeet Patil</span>
            </div>
          </div>
          <p>
            "Thanks Let's Work for helping me find a job without much hassle. If
            you are a fresher or a skilled person with expert knowledge in a
            specific field, you can easily find a job through the Let's work
            app."
          </p>
        </div>

        {/* <div className="user">
          <div className="user-info"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Reviews;
