import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-6xl mx-auto py-6">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          My Appointments
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your upcoming consultations.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6">

        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="
            bg-white
            rounded-[30px]
            border border-slate-100
            shadow-lg
            p-6
            hover:shadow-xl
            transition-all duration-300
          "
          >
            <div className="flex flex-col lg:flex-row gap-6">

              {/* Doctor Image */}
              <div>
                <img
                  className="
                  w-36
                  h-36
                  rounded-3xl
                  object-cover
                  bg-indigo-50
                "
                  src={item.image}
                  alt=""
                />
              </div>

              {/* Details */}
              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                      {item.name}
                    </h2>

                    <p className="text-primary font-medium mt-1">
                      {item.speciality}
                    </p>

                  </div>

                  <div>

                    <div className="px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                      Upcoming
                    </div>

                  </div>

                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">

                  <div>
                    <p className="text-sm text-slate-500 mb-2">
                      Address
                    </p>

                    <p className="text-slate-700">
                      {item.address.line1}
                    </p>

                    <p className="text-slate-700">
                      {item.address.line2}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-2">
                      Appointment Time
                    </p>

                    <p className="font-medium text-slate-700">
                      21 June, 2026
                    </p>

                    <p className="text-slate-600">
                      8:30 PM
                    </p>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    className="
                    flex-1
                    py-3
                    rounded-2xl
                    bg-primary
                    text-white
                    font-medium
                    hover:scale-[1.02]
                    transition-all duration-300
                  "
                  >
                    Pay Online
                  </button>

                  <button
                    className="
                    flex-1
                    py-3
                    rounded-2xl
                    border border-red-200
                    text-red-500
                    font-medium
                    hover:bg-red-500
                    hover:text-white
                    transition-all duration-300
                  "
                  >
                    Cancel Appointment
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyAppointments;