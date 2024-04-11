// import "./home.css";
import PopularSearch from "../PopularSearch/PopularSearch";
import Reviews from "../Reviews/Reviews";
import TopCompanies from "../TopCompanies/TopCompanies";
import Footer from "../../../components/Footer/Footer";
import Blog from "../../Blog/Blog";
import IndexPage from "./IndexPage";
function Home() {
  return (
    <div>
      <IndexPage />
      <PopularSearch />
      <TopCompanies />
      <Blog />
      <Reviews />
    </div>
  );
}

export default Home;
