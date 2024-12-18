"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface CustomButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, disabled = false, variant = 'default', children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-md font-semibold text-sm ${
      variant === "outline"
        ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
        : "bg-green text-white hover:bg-green-600"
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {children}
  </button>
);

const CustomProgressBar: React.FC<{ value: number }> = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-green h-2.5 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const steps = [
  { path: "/basic-details", label: "Basic Details" },
  { path: "/upload-image", label: "Images" },
  { path: "/set-modifiers", label: "Set Modifiers" },
  { path: "/preview-publish", label: "Preview and Publish" },
];

export default function AddMenuSideBar() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentStepIndex = steps.findIndex(step => step.path === pathname);
    if (currentStepIndex !== -1) {
      setActiveStep(currentStepIndex);
      setProgress((currentStepIndex + 1) * (100 / steps.length));
    }
  }, [pathname]);

  const handleProceed = () => {
    if (activeStep < steps.length - 1) {
      router.push(steps[activeStep + 1].path);
    } else {
      router.push("/uploading");
    }
  };

  const handleCancel = () => {
    if (activeStep > 0) {
      router.push(steps[activeStep - 1].path);
    }
  };

  return (
    <div className="bg-white p-8">
      <ol className="space-y-8 font-semibold mb-8">
        {steps.map((step, index) => (
          <li key={step.path} className="flex items-center">
            <Link href={step.path} className="flex items-center">
              <div className="relative">
                <span
                  className={`h-8 w-8 flex items-center justify-center rounded-full border ${
                    index <= activeStep
                      ? "border-green bg-green text-white"
                      : "bg-gray-100 border-gray-300 text-black"
                  }`}
                >
                  {index < activeStep ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-200"></div>
                )}
              </div>
              <span className="ml-4">{step.label}</span>
            </Link>
          </li>
        ))}
      </ol>
      <CustomProgressBar value={progress} />
      <div className="flex justify-between mt-4">
        <CustomButton onClick={handleCancel} disabled={activeStep === 0} variant="outline">
          Cancel
        </CustomButton>
        <CustomButton onClick={handleProceed}>
          {activeStep === steps.length - 1 ? "Upload" : "Proceed"}
        </CustomButton>
      </div>
    </div>
  );
}