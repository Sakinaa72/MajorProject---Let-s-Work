import "./TopCompanies.css"

function TopCompanies() {
  return (
    <div className="topcompanies">
      <h1>Job Openings in Top Companies</h1>
      <section>
        <div className="company">
          <img
            src="https://apna.co/_next/image?url=https%3A%2F%2Fapna-organization-logos.gumlet.io%2Fproduction%2F322333%3Fw%3D128&w=1920&q=75"
            alt=""
          />
          <h3>Zomato</h3>
          <p>food delivery and ordering platform</p>
          <button>View jobs </button>
        </div>
        <div className="company">
          <img
            src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Fhdfc.png&w=1920&q=75"
            alt=""
          />
          <h3>Hdfc Bank</h3>
          <p>Banking and financial services institutions</p>
          <button>View jobs</button>
        </div>
        <div className="company">
          <img
            src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Freliance-nippon.png&w=1920&q=75"
            alt=""
          />
          <h3>Reliance Life Insurance</h3>
          <p>Financial Services firm</p>
          <button> View jobs</button>
        </div>
        <div className="company">
          <img
            src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fcompanies%2Freliance-nippon.png&w=1920&q=75"
            alt=""
          />
          <h3>Reliance Life Insurance</h3>
          <p>Financial Services firm</p>
          <button> View jobs</button>
        </div>
      </section>
    </div>
  );
}

export default TopCompanies
