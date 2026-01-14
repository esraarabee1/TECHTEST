import React from "react";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import setappicon from "../assets/setappicon.png";
import col1 from "../assets/col1.png";
import col3 from "../assets/col3.png";
const HeroSection = () => {
  return (
    <section className="bg-[#26262B] text-white py-20 relative overflow-hidden">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <div className="col-sm-12 col-lg-4">
          <div className="px-18">
            <img src={col1} className="w-60 h-110 " />
          </div>
        </div>
        <div className="col-lg-4">
          <div className=" text-center px-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={setappicon} className="w-25 h-25 " />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dozens of apps.
              <br />
              One subscription.
            </h1>

            {/* Price */}
            <p className="text-4xl font-bold mt-4">$9.99</p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                Try free for 7 days
              </button>

              <button className="bg-[#fff] px-4 py-2 rounded-md">
                {" "}
                <img src={apple} className="w-6 h-6  " />
              </button>

              <button className="bg-[#fff] px-4 py-2 rounded-md">
                <img src={google} className="w-6 h-6  " />
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 mt-6 text-sm">
              Power up your workflow with Setapp, a <br></br> smart way to get
              apps.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="px-20">
            <img src={col3} className="w-60 h-110 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
