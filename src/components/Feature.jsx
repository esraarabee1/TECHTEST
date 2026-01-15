import React from "react";
import f1 from "../assets/f1.png";
import spanicon from "../assets/spanicon.png";
import arrow from "../assets/arrow.png";
const Feature = () => {
  return (
    <section className="bg-[#26262B] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What you get on Setapp.
          </h2>

          <p className="text-gray-400 mt-4 md:mt-0 text-sm md:text-base">
            With a single monthly subscription at $9.99, you get 240+ apps for
            <br className="hidden md:block" />
            your Mac.
          </p>
        </div>

        {/* Feature Card */}
        <div
          className="bg-gradient-to-br from-[#f1a7bc] to-[#7b4f9d] rounded-2xl p-8 md:p-12 flex flex-col items-start gap-10
"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <img src={spanicon} alt="icon" className="w-10 h-10" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Keep your Mac clean
                </h3>
                <p className="text-sm text-black/80">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
          </div>

          {/*  image */}
          <div className="flex-1 flex justify-center">
            <img
              src={f1}
              alt="feature"
              className="max-w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center py-15 gap-2">
          <img src={arrow} className="w-4 h-4" />
          <p className="">View all superpowers</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your Setapp journey.
          </h2>

          <p className="text-gray-400 mt-4 md:mt-0 text-sm md:text-base">
            Type in your task into Setapp search and get instant app<br></br>
            recommendations.
          </p>
        </div>
        <hr></hr>
      </div>
    </section>
  );
};

export default Feature;
