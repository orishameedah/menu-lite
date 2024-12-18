"use client";

import React from "react";
import Image from "next/image";
import bgSignUP from "public/assets/bgSignUP.svg";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col sm:flex-row bg-white min-h-screen items-center  justify-center gap-0 sm:gap-10  p-5">
      {/* Left side Image */}
      <div className="sm:w-[400px] w-full relative bg-bgImage h-72 sm:h-[480px] rounded-2xl flex items-center justify-center">
        <div>
          <Image src={bgSignUP} alt="Welcome to Bountip" className="m-auto" />
        </div>
      </div>

      {/* Form */}
      <div className="flex">
        <div className="w-full mt-5">
          <h1 className="mb-2 text-4xl font-bold">Welcome</h1>
          <p className="mb-8 text-xl text-gray-600">
            Let's get you started on Bountip
          </p>

          <form className="">
            <div className="flex space-x-5 mb-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 rounded-md bg-light px-4 py-3 focus:outline-none shadow-slate-50"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 rounded-md bg-light px-4 py-3 focus:outline-none shadow-slate-50"
              />
            </div>

            <input
              type="text"
              placeholder="+234- Phone Number "
              className="w-full rounded-md mb-5 bg-light px-4 py-3 focus:outline-none shadow-slate-50"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md mb-5 bg-light px-4 py-3 focus:outline-none shadow-slate-50"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                className="w-full rounded-md bg-light px-4 py-3 focus:outline-none shadow-slate-50"
              />
              <button
                type="button"
                onClick={handlePassword}
                className="absolute right-3 top-3 text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-light shadow-sm py-4 font-bold text-gray-500
                mt-10 hover:bg-green hover:text-white transition
              "
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
