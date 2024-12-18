"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState(""); // State for email

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Navigate to reset-link page with the email as a query parameter
    router.push(`/reset-link?email=${encodeURIComponent(email)}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 justify-center">
      <div className="sm:w-[400px] w-full  text-center">
        <h1 className="text-black font-extrabold text-4xl">Forgot Password?</h1>
        <p className="text-gray-600 pt-6 text-[22px] ">
          Enter the email associated with your account and we'll send an email
          instructions to reset
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-md mb-5 mt-10 bg-light px-5 py-3 focus:outline-none shadow-slate-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          required
        />

        <button
          type="submit"
          className="w-full rounded-md bg-green px-5 shadow-sm py-3 font-bold text-white
                mt-36 transition
              "
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </main>
  );
};

export default ForgotPassword;
