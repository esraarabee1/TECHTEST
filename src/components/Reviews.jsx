import React from "react";
import insta from "../assets/insta.png";
import Facebook from "../assets/Facebook.png";
import quote from "../assets/quote.png";
import x from "../assets/x.png";
import yout from "../assets/yout.png";
import socialicon from "../assets/socialicon.png";

const Reviews = () => {
  return (
    <section className="bg-[#FEFEFE] text-black py-24 pt-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setapp in your words.
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              What you say about how Setapp powers you up.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#">
                <img
                  src={Facebook}
                  className="w-6 opacity-80 hover:opacity-100"
                />
              </a>
              <a href="#">
                <img src={yout} className="w-6 opacity-80 hover:opacity-100" />
              </a>
              <a href="#">
                <img src={x} className="w-6 opacity-80 hover:opacity-100" />
              </a>
              <a href="#">
                <img src={insta} className="w-6 opacity-80 hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#F5F5F5] rounded-xl p-4 flex flex-col justify-between"
            >
              <img src={quote} className="w-100 mb-4" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Arash Pourhabibi</h3>
                  <span className="text-xs text-gray-400">
                    @ArashPourhabibi
                  </span>
                </div>

                <img src={socialicon} className="w-6 opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
