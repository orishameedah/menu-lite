"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

interface ValidationCriteria {
  uppercase: boolean;
  number: boolean;
  symbol: boolean;
  minPasswordLength: boolean;
}

const PassWordReset = () => {
  const [password, setPassword] = useState<string>("");
  const [validation, setValidation] = useState<ValidationCriteria>({
    uppercase: false,
    number: false,
    symbol: false,
    minPasswordLength: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Update validation criteria
    setValidation({
      uppercase: /[A-Z]/.test(newPassword),
      number: /\d/.test(newPassword),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
      minPasswordLength: newPassword.length >= 8,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Button clicked");
    router.push("/signin");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 justify-center">
      <div className="sm:w-[400px] w-full  text-center">
        {/* title */}
        <h1 className="text-black font-extrabold text-4xl">Forgot Password?</h1>
        <p className="text-gray-600 pt-6 text-[22px] ">
          Enter a new password you would like to use to login to your Bountip
          account.
        </p>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter New Password"
            className="w-full rounded-md mb-5 mt-10 bg-light px-5 py-3 focus:outline-none shadow-slate-50"
            value={password}
            onChange={handlePasswordChange}
          />

          <button
            type="button"
            onClick={handlePassword}
            className="absolute right-3 top-14 text-gray-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Validation Rules */}
        <ul className="mb-8 space-y-2 text-left">
          <li className="flex items-center text-black">
            <span className="mr-2 text-lime-800">
              {validation.uppercase ? "✓" : ""}
            </span>{" "}
            1 uppercase character
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-lime-800">
              {validation.number ? "✓" : ""}
            </span>{" "}
            1 number
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-lime-800">
              {validation.symbol ? "✓" : ""}
            </span>{" "}
            1 symbol
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-lime-800">
              {validation.minPasswordLength ? "✓" : ""}
            </span>{" "}
            8 characters minimum
          </li>
        </ul>

        <button
          type="submit"
          className="w-full rounded-md bg-green px-5 shadow-sm py-3 font-bold text-white
              mt-36 transition
            "
          //   disabled={!Object.values(validation).every(Boolean)} // Disable button if any criteria is not met
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </main>
  );
};

export default PassWordReset;
