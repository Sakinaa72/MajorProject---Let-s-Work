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
