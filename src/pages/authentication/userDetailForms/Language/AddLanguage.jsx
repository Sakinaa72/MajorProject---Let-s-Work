import "./AddLanguage.css";

function AddLanguage() {
  return (
    <div className="lang">
      <div id="aboutSideBar">
        <h1>Let's Work</h1>
        <h2>Complete your profile!</h2>
        <h3>
          Unlock 500+ jobs from top Companies and recieve direct calls from HRs
        </h3>
      </div>
      <section>
        <h1>Language</h1>
        <p>Add Languages you know to increase your chances of getting hired</p>
        <select name="Language" id="">
          <option value="">Choose Language</option>
          <option value="">English</option>
          <option value="">Hindi</option>
          <option value="">Marathi</option>
          <option value="">Urdu</option>
          <option value="">Gujrati</option>
          <option value="">Bengali</option>
          <option value="">Tamil</option>
          <option value="">French</option>
          <option value="">Spanish</option>
          <option value="">German</option>
        </select>
        <button id="lang-btn">Next</button>
      </section>
    </div>
  );
}

export default AddLanguage;
