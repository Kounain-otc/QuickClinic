import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Md Kounain",
    image: assets.profile,
    email: "kounain8939@gmail.com",
    phone: "8709845832",
    address: {
      line1: "Sahebganj, purana tola, masjid gali",
      line2: "Bhagalpur, Bihar",
    },
    gender: "Male",
    dob: "18-06-2004",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-8">

      {/* Profile Card */}
      <div className="bg-white rounded-[30px] shadow-lg border border-gray-100 p-8">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <img
            className="w-52 h-48 rounded-3xl object-cover border-4 border-primary/20"
            src={userData.image}
            alt=""
          />

          <div className="flex-1">
            <p className="text-slate-500 mt-2">
              Patient Profile
            </p>
            {isEdit ? (
              <input
                className="text-3xl font-bold outline-none border-b border-primary pb-2 w-full"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            ) : (
              <h1 className="text-4xl font-bold text-slate-800">
                {userData.name}
              </h1>
            )}

            

          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-[30px] shadow-lg border border-gray-100 p-8 mt-8">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Email Address
            </p>

            <p className="text-primary font-medium">
              {userData.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Phone Number
            </p>

            {isEdit ? (
              <input
                className="w-full bg-slate-50 p-3 rounded-2xl outline-none border"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-slate-500 mb-2">
              Address
            </p>

            {isEdit ? (
              <div className="space-y-3">
                <input
                  className="w-full bg-slate-50 p-3 rounded-2xl outline-none border"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value,
                      },
                    }))
                  }
                />

                <input
                  className="w-full bg-slate-50 p-3 rounded-2xl outline-none border"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value,
                      },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-slate-600">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-white rounded-[30px] shadow-lg border border-gray-100 p-8 mt-8">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Basic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Gender
            </p>

            {isEdit ? (
              <select
                className="w-full bg-slate-50 p-3 rounded-2xl border outline-none"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Date of Birth
            </p>

            {isEdit ? (
              <input
                className="w-full bg-slate-50 p-3 rounded-2xl border outline-none"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>

        </div>
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">

        <button
          onClick={() => setIsEdit(!isEdit)}
          className="
          bg-primary
          text-white
          px-10
          py-4
          rounded-full
          font-medium
          hover:scale-105
          transition-all
          duration-300
          shadow-lg
          "
        >
          {isEdit ? "Save Information" : "Edit Profile"}
        </button>

      </div>

    </div>
  );
};

export default MyProfile;