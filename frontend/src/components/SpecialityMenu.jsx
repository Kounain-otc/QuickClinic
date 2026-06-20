import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section id="speciality" className="py-24">
      <div className="text-center mb-14">
        <p className="text-violet-600 font-medium tracking-widest uppercase text-sm">
          Specialities
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-3">
          Find Your Specialist
        </h1>

        <p className="max-w-2xl mx-auto text-slate-500 mt-5 leading-7">
          Connect with experienced doctors across various specialties and
          receive the care you deserve.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="group bg-white border border-slate-100 rounded-[30px]
            p-6 shadow-sm hover:shadow-xl hover:-translate-y-1
            transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">

              <div
                className="
                w-20 h-20 rounded-3xl
                bg-gradient-to-br from-violet-50 to-indigo-100
                flex items-center justify-center
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-12 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <h3 className="mt-5 text-slate-800 font-medium text-sm md:text-base">
                {item.speciality}
              </h3>

              <p className="text-xs text-slate-400 mt-2">
                Explore →
              </p>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default SpecialityMenu;