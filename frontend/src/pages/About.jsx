import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="my-3">

      {/* Heading */}
      <div className="text-center">
       

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-4">
          About Us
        </h1>

       
      </div>

      {/* Main Section */}
      <div className="mt-4 grid lg:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-60 h-60 bg-violet-200/30 blur-3xl rounded-full"></div>

          <img
            src={assets.about_image}
            alt=""
            className="
            relative
            rounded-[40px]
            shadow-[0_20px_70px_rgba(0,0,0,0.08)]
            w-full
            "
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-600 leading-8">

          <p>
            Welcome to <span className="font-semibold text-violet-600">Prescripto</span>,
            your trusted partner in managing healthcare conveniently and
            efficiently. We understand the challenges patients face when
            scheduling appointments and accessing medical services.
          </p>

          <p>
            We continuously strive to deliver a seamless healthcare experience
            by integrating modern technology with patient-centric solutions.
            Whether it's your first appointment or ongoing care, we're with you
            every step of the journey.
          </p>

          {/* Vision Card */}
          <div className="bg-violet-50 rounded-[30px] p-8 border border-violet-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Our Vision
            </h2>

            <p>
              To bridge the gap between patients and healthcare professionals,
              making quality healthcare accessible, reliable and effortless for
              everyone.
            </p>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-28 text-center">

        <p className="text-violet-600 font-medium uppercase tracking-[0.2em] text-sm">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-semibold text-slate-900 mt-4">
          Designed Around You
        </h2>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}
        <div
          className="
          bg-white
          rounded-[32px]
          p-10
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          hover:-translate-y-2
          hover:bg-violet-600
          hover:text-white
          transition-all duration-300
          "
        >
          <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl mb-6">
            ⚡
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Efficiency
          </h3>

          <p className="leading-7">
            Streamlined appointment scheduling that fits perfectly into your
            busy lifestyle.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="
          bg-white
          rounded-[32px]
          p-10
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          hover:-translate-y-2
          hover:bg-violet-600
          hover:text-white
          transition-all duration-300
          "
        >
          <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl mb-6">
            🏥
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Convenience
          </h3>

          <p className="leading-7">
            Access a network of trusted healthcare professionals with just a few
            clicks.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="
          bg-white
          rounded-[32px]
          p-10
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          hover:-translate-y-2
          hover:bg-violet-600
          hover:text-white
          transition-all duration-300
          "
        >
          <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl mb-6">
            ❤️
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Personalization
          </h3>

          <p className="leading-7">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>

      </div>

      {/* Stats Section */}
      <div className="mt-28 bg-violet-600 rounded-[40px] p-10 md:p-14">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h1 className="text-4xl font-bold text-white">
              15K+
            </h1>
            <p className="text-violet-100 mt-2">
              Happy Patients
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              100+
            </h1>
            <p className="text-violet-100 mt-2">
              Specialists
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              24×7
            </h1>
            <p className="text-violet-100 mt-2">
              Support
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              98%
            </h1>
            <p className="text-violet-100 mt-2">
              Satisfaction
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;