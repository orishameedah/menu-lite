"use client";

import React from "react";
import Image from "next/image";
import bgSignUP from "public/assets/bgSignUP.svg";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col sm:flex-row bg-white min-h-screen items-center justify-center gap-0 sm:gap-10  p-5">
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
          <p className="mb-8 text-xl text-gray-600">Sign in to your account</p>

          <form className="">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md mb-5 bg-light px-5 py-3 focus:outline-none shadow-slate-50"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                className="w-full rounded-md mb-4 bg-light px-5 py-3 focus:outline-none shadow-slate-50"
              />
              <button
                type="button"
                onClick={handlePassword}
                className="absolute right-3 top-3 text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <Link href="/forgot-password" className="font-bold text-sm">
              Forgot Password?
            </Link>

            <p className="mt-8 sm:mt-16 text-[12px] font-bold">
              By continuing, you agree to our{" "}
              <span className="text-green">Terms of Service</span> and
              <span className="text-green"> Privacy Policy</span>
            </p>

            <button
              type="submit"
              className="w-full rounded-md bg-green px-5 shadow-sm py-3 font-bold text-white
                mt-2 transition
              "
            >
              Sign In
            </button>

            <p className="text-sm mt-3 text-center font-bold">
              Don't have an account?{" "}
              <Link href="/register" className="text-green">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
