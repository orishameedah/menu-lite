"use client";

import React from "react";
import { useRouter } from "next/navigation";
import passwordFail from "public/assets/password-fail.svg";
import Image from "next/image";

const PasswordResetFailed = () => {
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/password-reset");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 justify-center">
      <div className="sm:w-[460px] w-full  text-center">
        <Image src={passwordFail} alt="Password fail" className="m-auto" />
        <h1 className="text-black font-bold text-2xl">Password Reset Failed</h1>
        <p className="text-gray-600 mt-2 text-lg text-left mb-3">
          We're sorry, but it seems like there was an issue with your password
          reset request. Please double check the following:
        </p>

        <ul className="text-left text-gray-600 mb-16 ml-2">
          <li>
            1. Make sure you entered the correct email address associated with
            your account
          </li>
          <li>2. Verify that you have a stable internet connection</li>
          <li>
            3. <span className="text-red-700">Expired Link:</span> password
            reset link might be expired and you might need to make another
            request
          </li>
        </ul>

        <button
          type="submit"
          className="w-full rounded-md bg-green px-5 shadow-sm py-3 font-bold text-white transition"
          onClick={handleSubmit}
        >
          Go back to reset
        </button>
      </div>
    </main>
  );
};

export default PasswordResetFailed;
