import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <section className="my-12">
      {/* Heading */}
      <div className="mb-10">
        

        <h1 className="text-4xl font-semibold text-slate-900 mt-3">
          Browse Doctors
        </h1>

       
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`lg:hidden px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
            showFilter
              ? "bg-violet-600 text-white"
              : "bg-white border border-slate-200 text-slate-700"
          }`}
        >
          Filters
        </button>

        {/* Filter Sidebar */}
        <div
          className={`flex-col gap-4 ${
            showFilter ? "flex" : "hidden lg:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "General physician"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            General Physician
          </p>

          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "Gynecologist"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            Gynecologist
          </p>

          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "Dermatologist"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            Dermatologist
          </p>

          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "Pediatricians"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            Pediatricians
          </p>

          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "Neurologist"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            Neurologist
          </p>

          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[250px] px-5 py-3 rounded-2xl border cursor-pointer transition-all duration-300 shadow-sm ${
              speciality === "Gastroenterologist"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-white border-slate-200 hover:border-violet-400 hover:text-violet-600"
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {filterDoc.map((item, index) => (
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
              {/* Image */}
              <div className="bg-gradient-to-br from-violet-50 to-indigo-100">
                <img
                  className="w-full group-hover:scale-105 transition duration-500"
                  src={item.image}
                  alt=""
                />
              </div>

              {/* Content */}
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

                <p className="text-slate-500 mt-2">{item.speciality}</p>

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
      </div>
    </section>
  );
};

export default Doctors;