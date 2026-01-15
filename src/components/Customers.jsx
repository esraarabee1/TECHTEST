import React from "react";
import custmer from "../assets/custmer.png";
import arroww from "../assets/arroww.png";

const Customers = () => {
  return (
    <section className="bg-[#26262B] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#7a5574] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* Text side */}
          <div className="md:w-1/2 text-white">
            <p className="text-lg md:text-xl leading-relaxed">
              Musicians like Jason use Setapp to push the limits of their
              creativity, dancing through tasks for more time to play.
            </p>

            <span className="block mt-6 text-sm opacity-80">Jason Staczek</span>

            {/* Play button */}
            <button className="mt-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
              <img src={arroww} alt="arroww" className="w-6 h-12" />
            </button>
          </div>

          {/* Image side */}
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src={custmer}
              alt="customer"
              className="w-[260px] md:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
