import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-32">

      {/* Main Footer */}
      <div className="bg-primary rounded-[40px] px-8 md:px-16 py-14 text-white">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14">

          {/* Left */}
          <div>
            <img className="w-44 mb-6" src={assets.logo} alt="" />

            <p className="text-white/70 leading-7 md:w-4/5">
              Making healthcare more accessible with trusted specialists and
              seamless appointment booking. Experience quality care with a
              modern and hassle-free approach.
            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <i className="fa-brands fa-instagram"></i>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-white/70">

              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Doctors
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-white/70">

              <li>+91 98765 43210</li>

              <li>support@medicare.com</li>

              <li>24×7 Customer Support</li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-sm">
            © 2026 MediCare. All rights reserved.
          </p>

          <p className="text-white/60 text-sm">
            Designed with ❤️ for better healthcare.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;