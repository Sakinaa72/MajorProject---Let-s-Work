import "./Blog.css"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/navbar/NavBar";

function Blog() {
  return (
    <>
      <NavBar />

    <div className="blog">
      <div className="blog-heading">
        <h2>Fresher's Advice</h2>
      </div>
      <section>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2024/02/featurePost_1623079065036.png"
            alt=""
          />
          <h4>
            Career Options in Commerce:
          </h4>
          <p>
            In this article, we’ll discuss the most lucrative career choices for
            commerce students in India. It will help you to understand the
            various work...
          </p>
          <span> - Aug 5, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/09/6280815-696x696.jpg"
            alt=""
          />
          <h4>
            First Impression Matters:
          </h4>
          <p>
            If you've ever been on a job interview, you know that one question
            always seems to linger like a cloud over your head: "Tell...
          </p>
          <span> - Sept 13, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/08/20284123_6273826-696x464.jpg"
            alt=""
          />
          <h4>
            Explaining new Horizons:
          </h4>
          <p>
            The job landscape is always shifting, keeping pace with the changing
            world. While tech roles are definitely on the rise, it's not just
            about...
          </p>
          <span>- Feb 7, 2024</span>
        </div>
      </section>
      <div className="blog-heading">
        <h2>Career Advice</h2>
      </div>
      <section>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/11/6064a1062e270e10cf5106ba.jpg"
            alt=""
          />
          <h4>
            Empowering Leaderships:
          </h4>
          <p>
            We all love to watch TV series. Isn’t it? Aajkal aise bohot saare OTT 
            platforms hain jo lagatar naye naye shows release kar rhe...
          </p>
          <span> - Aug 5, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/07/1-1-696x464.jpg"
            alt=""
          />
          <h4>
            Tips for Online Interviews:
          </h4>
          <p>
            In current times, online is the #newnormal. Meetings, catch-ups, 
            even weddings are all happening online owing to the pandemic safety norms. Same is the...
          </p>
          <span> - Sept 13, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/11/603629edf946f33b9ee40be0.png"
            alt=""
          />
          <h4>
            A blueprint for Success:
          </h4>
          <p>
            In this fast-moving world, most of us wish to evolve as better 
            individuals and seek growth, whether in our personal aspirations 
            or professional ambitions....
          </p>
          <span>- Feb 7, 2024</span>
        </div>
      </section>
      <div className="blog-heading">
        <h2>Interview Advice</h2>
      </div>
      <section>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/11/600561ece0862c0d1f09d672.png"
            alt=""
          />
          <h4>
            5 Key tips:
          </h4>
          <p>
            In current times, online is the #newnormal. Meetings, 
            catch-ups, even weddings are all happening online owing 
            to the pandemic safety norms. Same is the...
          </p>
          <span> - Aug 5, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/11/605321cb7bd1f51c4d0787f5.jpg"
            alt=""
          />
          <h4>
            Answer like a pro -
          </h4>
          <p>
            One question that often pops up in job interviews for experienced 
            candidates is why does the person want to quit his present job. Let’s...
          </p>
          <span> - Sept 13, 2023</span>
        </div>
        <div className="blog-cards">
          <img
            src="https://apna.co/career-central/wp-content/uploads/2023/11/600561f2e0862c0d1f09d67a.png"
            alt=""
          />
          <h4>
            Decoding Salary Expectations
          </h4>
          <p>
            One straightforward question that often makes us feel 
            awkward during an interview is “What is your salary expectation?”
             This question is simple yet significant for both the...
          </p>
          <span>- Feb 7, 2024</span>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}

export default Blog
