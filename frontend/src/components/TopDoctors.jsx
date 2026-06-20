import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="my-28">
      {/* heading */}
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-600 font-medium uppercase tracking-[0.2em] text-sm">
          Featured Doctors
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-4">
          Meet Our Specialists
        </h1>

        <p className="text-slate-500 max-w-2xl mt-5 leading-7">
          Experienced and trusted healthcare professionals ready to
          provide exceptional care.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="
              group
              bg-white
              rounded-[32px]
              border border-slate-100
              overflow-hidden
              cursor-pointer
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
              transition-all duration-300
            "
          >
            {/* image */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-100">
              <img
                className="w-full group-hover:scale-105 transition duration-500"
                src={item.image}
                alt=""
              />
            </div>

            {/* content */}
            <div className="p-6">

              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                <p className="text-green-600 text-sm font-medium">
                  Available Today
                </p>
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                {item.name}
              </h2>

              <p className="text-slate-500 mt-2">
                {item.speciality}
              </p>

              {/* bottom */}
              <div className="flex justify-between items-center mt-6">

                <div className="text-amber-500 text-sm">
                  ★ 4.9
                </div>

                <button
                  className="
                    bg-violet-50
                    text-violet-700
                    px-4 py-2
                    rounded-xl
                    text-sm
                    font-medium
                    group-hover:bg-violet-600
                    group-hover:text-white
                    transition-all
                  "
                >
                  Book →
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="
            bg-violet-600
            text-white
            px-8 py-4
            rounded-2xl
            shadow-lg
            hover:bg-violet-700
            hover:scale-[1.02]
            transition-all
          "
        >
          View All Doctors
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;