import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="my-4">

      {/* Heading */}
      <div className="text-center">
        
        

        <h1 className="text-4xl font-semibold text-slate-900 mt-0">
          Contact Us
        </h1>

       
      </div>

      {/* Main Section */}
      <div className="mt-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-violet-200/30 blur-3xl rounded-full"></div>

          <img
            className="
            relative
            w-full
            rounded-[40px]
            shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            "
            src={assets.contact_image}
            alt=""
          />
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Office Card */}
          <div className="bg-white rounded-[28px] p-7 shadow-lg border border-slate-100">

            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Our Office
            </h2>

            <div className="space-y-3 text-slate-500 text-sm leading-6">

              <p>
                00000 Willms Station <br />
                Suite 000, Washington, USA
              </p>

              <p>
                Tel: (000) 000-0000 <br />
                Email: greatstackdev@gmail.com
              </p>

            </div>

          </div>

          {/* Career Card */}
          <div className="bg-violet-600 rounded-[28px] p-7 text-white shadow-xl">

            <h2 className="text-xl font-semibold mb-3">
              Careers at Prescripto
            </h2>

            <p className="text-violet-100 text-sm leading-6">
              Learn more about our teams and exciting job opportunities.
            </p>

            <button
              className="
              mt-5
              px-6
              py-3
              bg-white
              text-violet-700
              rounded-2xl
              text-sm
              font-medium
              hover:scale-105
              transition-all
              "
            >
              Explore Jobs →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;