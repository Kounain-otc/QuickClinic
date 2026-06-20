import React from "react";

const Testimonials = () => {
  return (
    <section className="my-28">

      <div className="text-center">
        <p className="text-violet-600 uppercase tracking-[0.2em] text-sm font-medium">
          Testimonials
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-4">
          What Patients Say
        </h1>

        <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-7">
          Thousands of patients trust our platform for fast and seamless
          healthcare appointments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">

        {/* Card 1 */}
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all">
          <div className="text-amber-400 text-xl">
            ★★★★★
          </div>

          <p className="text-slate-600 leading-8 mt-6">
            Booking an appointment took less than a minute. The process
            was smooth and hassle-free.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold">
              S
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Sarah Johnson
              </h3>

              <p className="text-slate-400 text-sm">
                New York
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-900 rounded-[32px] p-8 shadow-xl text-white">
          <div className="text-amber-400 text-xl">
            ★★★★★
          </div>

          <p className="leading-8 mt-6 text-slate-300">
            I was able to connect with a specialist instantly. The user
            experience feels very premium.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center font-bold">
              M
            </div>

            <div>
              <h3 className="font-semibold">
                Michael Brown
              </h3>

              <p className="text-slate-400 text-sm">
                California
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all">
          <div className="text-amber-400 text-xl">
            ★★★★★
          </div>

          <p className="text-slate-600 leading-8 mt-6">
            Finding trusted doctors has never been easier. Highly
            recommended for everyone.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
              E
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Emma Wilson
              </h3>

              <p className="text-slate-400 text-sm">
                Chicago
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;