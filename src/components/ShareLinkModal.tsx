"use client";

import React, { useState } from "react";
import Image from "next/image";
import burger from "public/assets/Ellipse 332.svg";
import { CopyIcon, XIcon, ChevronRightIcon, Check } from 'lucide-react';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

interface ShareLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

const ShareLinkModal: React.FC<ShareLinkModalProps> = ({ isOpen, onClose, shareUrl }) => {
  const [showLinkCopied, setShowLinkCopied] = useState<boolean>(false);

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowLinkCopied(true);
    setTimeout(() => setShowLinkCopied(false), 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end bg-opacity-50 bg-gray-800">
      <div className="bg-white w-[22rem] min-h-screen p-6 shadow-xl">
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl font-semibold">Share Item Link</h2>
          <button onClick={onClose}>
            <XIcon
              className="text-gray-200 bg-gray-400 w-6 h-6 rounded-full"
              size={22}
            />
          </button>
        </div>
        <div className="bg-burgerlay rounded-lg p-4 mb-6 mt-6">
          <div className="flex items-start mb-4">
            <Image
              src={burger}
              alt="Menu item"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="text-white font-semibold">
                Hey, check out my new menu item
              </p>
              <p className="text-white font-light text-sm">
                Tap to copy link and share
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md flex items-center justify-center space-x-2 p-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <button
              onClick={handleLinkCopy}
              className="text-green-500 hover:text-green-600"
            >
              <CopyIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <ul className="mt-6 space-y-3">
          <div className="flex border rounded-lg items-center cursor-pointer justify-between p-3">
            <li className="flex">
              <FaEnvelope className="mr-2 mt-1 text-gray-600" />
              Share via Email
            </li>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex border rounded-lg items-center cursor-pointer justify-between p-3">
            <li className="flex">
              <FaWhatsapp className="mr-2 mt-1 text-white bg-green rounded-full" />
              Share via WhatsApp
            </li>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex border rounded-lg items-center cursor-pointer justify-between p-3">
            <li className="flex">
              <FaFacebook className="mr-2 mt-1 text-blue-600" />
              Share via Facebook
            </li>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex border rounded-lg items-center cursor-pointer justify-between p-3">
            <li className="flex">
              <FaInstagram className="mr-2 mt-1 text-pink-800" />
              Share via Instagram
            </li>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="flex border rounded-lg items-center cursor-pointer justify-between p-3">
            <li className="flex">
              <FaTwitter className="mr-2 mt-1 text-black" />
              Share via Twitter
            </li>
            <ChevronRightIcon className="h-5 w-5" />
          </div>
        </ul>
      </div>
      {showLinkCopied && (
        <div className="fixed top-4 right-4 bg-green border border-green text-white px-4 py-2 rounded-md flex items-center">
          <Check className="w-5 h-5 mr-2" />
          Link Copied!
        </div>
      )}
    </div>
  );
};

export default ShareLinkModal;

