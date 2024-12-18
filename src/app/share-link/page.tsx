"use client";

import React, { useState } from "react";
import Image from "next/image";
import Marked from "public/assets/Group 1976.svg";
import bountip from "public/assets/bountip.svg";
import { CopyIcon, ShareIcon } from 'lucide-react';
import ShareLinkModal from "@/components/ShareLinkModal"

const Page = () => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const shareUrl = "https://bountip.restaurant/Bobsb...";

  const handleShareLink = () => {
    setShowShareModal(!showShareModal);
  };

  const handleLinkCopy = () => {
    navigator.clipboard.writeText("https://bountip.restaurant/BobsBurger"); // Mock URL
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="items-start justify-items-start px-7 py-4">
        <Image src={bountip} alt="bountip" width={30} height={30} />
      </div>

      <main className="px-7 md:py-14 py-4">
        <div>
          <Image src={Marked} alt="marked" className="object-contain" />
        </div>
        <div className="text-left sm:w-2/3 lg:w-1/2 w-full">
          <h1 className="text-4xl font-bold">
            Your item is <span className="text-green">live!</span>
          </h1>
          <p className="text-base text-justify text-gray-800 my-4">
            Awesome! Your menu item is now live and looking good. You can share
            on your social media with your potential customers
          </p>
        </div>
        <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 ">
          <button onClick={handleLinkCopy} className="flex space-x-3 w-full sm:w-3/6 lg:w-4/12 mb-3 sm:mb-0 lg:mb-0 border px-3 py-2 rounded-lg items-center justify-center">
            <CopyIcon className="h-4 w-6" />
            <span className="text-sm">{shareUrl}</span>
          </button>
          <button
            onClick={handleShareLink}
            className="flex space-x-3 w-full sm:w-2/12 lg:w-1/12 border px-3 py-2 items-center justify-center text-green text-center rounded-lg"
          >
            <ShareIcon className="h-4 w-6" />
            <span className="text-[15px]">Share</span>
          </button>
        </div>
        <button className="bg-green mt-3 text-white px-3 py-2 rounded-lg w-full sm:w-8/12 lg:w-5/12 items-center justify-center">
          Go back to home
        </button>

        <ShareLinkModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          shareUrl={shareUrl}
        />
      </main>
    </div>
  );
};

export default Page;

