import React from "react";
import vector from "../assets/vector.png";
import logoo from "../assets/logoo.png";

const Footer = () => {
  return (
    <footer className="bg-[#26262B] text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left */}
          <div className="md:w-1/2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src={logoo} alt="logo" className="w-6" />
              <span className="font-semibold tracking-wide">SETAPP</span>
            </div>

            {/* Newsletter */}
            <p className="text-gray-400 mb-4">
              Updates from our team, written with love
            </p>

            <div className="flex items-center max-w-sm bg-[#1f1f23] rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 flex-1 text-sm outline-none placeholder-gray-500"
              />

              <div className="h-6 w-px bg-white/10"></div>

              <button className="px-4 py-2  hover:opacity-80 rounded-sm  bg-white">
                <img src={vector} alt="send" className="w-4" />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a className="hover:text-white">Home</a>
              </li>
              <li>
                <a className="hover:text-white">Blog</a>
              </li>
              <li>
                <a className="hover:text-white">Podcast</a>
              </li>
            </ul>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a className="hover:text-white">About</a>
              </li>
              <li>
                <a className="hover:text-white">Careers</a>
              </li>
              <li>
                <a className="hover:text-white">Pricing</a>
              </li>
            </ul>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a className="hover:text-white">Getting started with Setapp</a>
              </li>
              <li>
                <a className="hover:text-white">Problems</a>
              </li>
              <li>
                <a className="hover:text-white">Fix macOS Ventura</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Setapp Limited, 9 Tallow Street,
            Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID:
            IE3425001BH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
