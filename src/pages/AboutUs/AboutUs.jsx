import "./AboutUs.css"
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import TopSection from '../../components/aboutUs/TopSection';
import MiddleSection from '../../components/aboutUs/MiddleSection';
import BottomSection from '../../components/aboutUs/BottomSection';

function AboutUs() {
  return (
    <>
      <NavBar />
      <div>
        <TopSection />
        <MiddleSection />
        <BottomSection />     
      </div>
      <Footer />
    </>
  );
}

export default AboutUs
