import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="my-28">
      <div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 md:px-14 lg:px-20 py-12">

        {/* blur effects */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* left */}
          <div className="max-w-xl">

            <p className="text-violet-400 uppercase tracking-[0.2em] text-sm font-medium">
              Start Today
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mt-4">
              Healthcare,
              <br />
              just a few clicks away.
            </h1>

            <p className="text-slate-400 leading-8 mt-6">
              Create your account and connect with trusted specialists
              without waiting in long queues.
            </p>

            <button
              onClick={() => {
                navigate("/login");
                scrollTo(0, 0);
              }}
              className="
              mt-10
              bg-white
              text-slate-900
              px-7 py-4
              rounded-2xl
              font-medium
              shadow-xl
              hover:scale-[1.02]
              transition-all duration-300
              "
            >
              Create Account →
            </button>
          </div>

          {/* right */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full"></div>

            <img
              className="relative w-[320px] md:w-[420px]"
              src={assets.appointment_img}
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;