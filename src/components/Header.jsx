import React from "react";
import SVG from "../assets/SVG.png";
import flag from "../assets/flag.png";
const Header = () => {
  return (
    <header className="bg-[#26262B] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 ">
            <img src={SVG} />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              How it works
            </a>
            <a href="#" className="hover:text-white">
              All apps
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              For Teams
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
            <a href="#" className="hover:text-white">
              Podcast
            </a>
          </nav>
          <div className=" flex items-center gap-8 px-6">
            <span>|</span>
            <div>
              <img src={flag} className="w-6 h-4  " />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-300 hover:text-white">
              Sign in
            </a>
            <button className="border border-gray-500 px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition">
              Try free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
