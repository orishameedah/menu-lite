"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import the router
import bountip from "public/assets/bountip.svg";

const AnimatedLoaderPage = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Progress bar logic
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0)); // Loop loader for demo
    }, 120); // Adjust speed

    // Timeout to move to the share link page after 60 seconds
    const timeout = setTimeout(() => {
      router.push("/share-link"); // Navigate to the share link page
    }, 20000); // 60 seconds delay

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="items-start justify-items-start p-7">
        <Image src={bountip} alt="bountip" width={50} height={50} />
      </div>
      <main className="flex-grow flex flex-col items-center justify-center">
        {/* Outer ring */}
        <div className="relative w-28 h-28">
          {/* White track (base) */}
          <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full"></div>

          {/* Green progress */}
          <div
            className="absolute top-0 left-0 w-full h-full border-8 border-green rounded-full"
            style={{
              clipPath:
                "polygon(50% 50%, 0% 50%, 0% 0%, 100% 0%, 100% 100%, 50% 100%)",
              transform: `rotate(${(progress / 100) * 360}deg)`,
              transition: "transform 0.1s linear",
            }}
          ></div>
        </div>
        <h1 className="mt-5 text-2xl font-semibold text-gray-900">
          Uploading Item
        </h1>
        <p className="mt-2 text-gray-500">
          Great, sit back and relax while we upload your menu item
        </p>
      </main>
    </div>
  );
};

export default AnimatedLoaderPage;
