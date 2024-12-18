"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import order from "public/assets/order.svg";
import settings from "public/assets/settings-01.svg";
import customer from "public/assets/customer.svg";
import analytic from "public/assets/analytic.svg";
import bountip from "public/assets/bountip.svg";
import logout from "public/assets/login-02.svg";
import { XIcon } from "lucide-react";

export default function MenuSideBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Menu");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="lg:w-56 flex">
      {/* Bountip Icon for mobile (for toggling sidebar) */}
      <div className="lg:hidden fixed top-4 right-4 z-30">
        <button
          className="p-2  rounded-full"
          onClick={toggleSidebar}
        >
          <Image
            src={bountip}
            alt="Bountip Icon"
            className="bg-white"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Items */}
      <div
        className={`fixed z-30 h-screen w-56 p-6 bg-white lg:bg-none border-r-2 border-gray-300 transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Show Bountip on sidebar for all screen sizes */}
        <div className="flex justify-between items-center mb-10">
          <Image src={bountip} alt="bountip" />
          <button onClick={toggleSidebar}>
                  <XIcon
                    className="lg:hidden text-green w-10 h-10 rounded-full"
                    size={40}
                  />
          </button>
        </div>
        <ul className="space-y-4">
          {/* Menu Items */}
          <li>
            <button
              onClick={() => setActiveTab("Menu")}
              className={`flex items-center space-x-3 py-2 px-1 rounded-md w-full ${
                activeTab === "Menu"
                  ? "bg-green text-white"
                  : "hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <Image src={order} alt="Menu Icon" />
              <span>Menu</span>
            </button>
          </li>

          {/* Order Items */}
          <li>
            <button className="flex items-center space-x-4 p-2 rounded-md w-full hover:bg-green hover:text-white">
              <Image src={order} alt="Order Icon" />
              <span>Order</span>
            </button>
          </li>

          {/* Analytics Items */}
          <li>
            <button className="flex items-center space-x-4 p-2 rounded-md w-full hover:bg-green hover:text-white">
              <Image src={analytic} alt="Analytic Icon" />
              <span>Analytics</span>
            </button>
          </li>

          {/* Customers Items */}
          <li>
            <button className="flex items-center space-x-4 p-2 rounded-md w-full hover:bg-green hover:text-white">
              <Image src={customer} alt="Customer Icon" />
              <span>Customers</span>
            </button>
          </li>

          {/* Setting Items */}
          <li>
            <button className="flex items-center space-x-4 p-2 rounded-md w-full hover:bg-green hover:text-white">
              <Image src={settings} alt="Settings Icon" />
              <span>Settings</span>
            </button>
          </li>

          {/* Logout Items */}
          <li className="absolute bottom-6 left-6 w-52">
            <button className="flex items-center space-x-4 p-2 rounded-md w-full text-red-700">
              <Image src={logout} alt="Logout Icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
