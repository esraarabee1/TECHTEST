import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Customers from "./components/Customers";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Feature />
      <Customers />
      <Reviews />
    </div>
  );
};

export default App;
