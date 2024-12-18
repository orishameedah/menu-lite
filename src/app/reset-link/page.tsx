"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Envelope from "public/assets/Env-Img.svg";
import Image from "next/image";
import Link from "next/link";

const ResetLink = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const email = searchParams.get("email"); // Extract email from the query params
  const [emailState, setEmailState] = useState<string | null>(null); // State for email

  useEffect(() => {
    if (email) {
      setEmailState(email);
    } else {
      setEmailState("JohnDoe@example.com"); // Fallback to default if no email is found
    }
  }, [email]);
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/password-reset");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 justify-center">
      <div className="sm:w-[460px] w-full  text-center">
        <Image src={Envelope} alt="Password fail" className="m-auto" />
        <h1 className="text-black font-bold text-4xl">Reset Link Sent</h1>
        <p className="text-gray-600 mt-2 text-lg text-center mb-3">
          We just sent you a password reset link to your email address,{" "}
          <span className="text-green">{emailState}</span> kindly click on the
          link to reset your password
        </p>

        <button
          type="submit"
          className="w-full rounded-md mt-32 bg-green px-5 shadow-sm py-3 font-bold text-white transition"
          onClick={handleSubmit}
        >
          Resend Link
        </button>

        <p className="text-center text-sm pt-3">
          Remember your password?{" "}
          <Link className="text-green font-bold" href="/signin">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ResetLink;
