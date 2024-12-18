"use client";

import React from "react";
import { useRouter } from "next/navigation";
import passwordSucess from "public/assets/password reset.svg";
import Image from "next/image";

const PasswordResetSuccessful = () => {
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 justify-center">
      <div className="sm:w-[460px] w-full  text-center">
        <Image src={passwordSucess} alt="Password Reset" className="m-auto" />
        <h1 className="text-black font-bold mt-2 text-3xl">
          Password Reset Successful!
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          The password for your account has successful been reset. Login to your
          Bountip account
        </p>

        <button
          type="submit"
          className="w-full rounded-md bg-green px-5 shadow-sm py-3 font-bold text-white mt-36 transition"
          onClick={handleSubmit}
        >
          Go to login
        </button>
      </div>
    </main>
  );
};

export default PasswordResetSuccessful;
