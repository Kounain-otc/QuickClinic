import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 rounded-3xl px-6 md:px-12 lg:px-16 py-10 lg:py-12">

      {/* Background Blur */}
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

        {/* Left */}
        <div className="max-w-xl">

          <p className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-violet-300">
            Trusted by 15K+ Patients
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mt-4">
            Find trusted doctors
            <br />
            without waiting.
          </h1>

          <p className="text-slate-400 leading-7 mt-4 text-sm md:text-base">
            Connect with experienced specialists and book appointments
            instantly without long queues.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="#speciality"
              className="inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all"
            >
              Book Appointment →
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8">

            <div>
              <h2 className="text-xl font-bold text-white">
                100+
              </h2>
              <p className="text-slate-400 text-sm">
                Doctors
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                15K+
              </h2>
              <p className="text-slate-400 text-sm">
                Patients
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                4.9★
              </h2>
              <p className="text-slate-400 text-sm">
                Ratings
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center">

          <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full"></div>

          <div className="relative overflow-hidden rounded-[30px]">

            <img
              src={assets.header}
              alt=""
              className="w-[230px] md:w-[320px] lg:w-[380px] rounded-[30px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;