import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Home from "../home/HomeBanner/Home";

const RootLayout = () => {
  console.log("Hello");
  fetch("http://localhost:3000/api/user/");
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default RootLayout;
