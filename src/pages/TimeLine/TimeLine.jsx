import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import ScrollPosts from "../../components/timeline/ScrollPosts";

function TimeLine() {
  return (
    <>
      <NavBar />
      <div>
        <ScrollPosts />
      </div>
    </>
  );
}

export default TimeLine;
