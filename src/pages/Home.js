import React from "react";
import Footer from "../components/Footer";
import Body from "../components/home/Body";
import Features from "../components/home/Features";
import Header from "../components/home/Header";

function Home() {
  return (
    <div className="bg-[#F8F6FF] h-full">
      <Header />
      <Features />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
