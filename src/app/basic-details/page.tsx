"use client";

import React, { useState } from "react";
import AddMenuSideBar from "@/components/AddMenuSideBar";
import ToggleSwitch from "@/components/ToggleSwitch";
// import Dropdown from "@/components/Dropdown";
import PopUp from "@/components/PopUp";

function page() {
  // // const [isAvailable, setIsAvailable] = useState(false);
  // const [category, setCategory] = useState("");

  // const categories = [
  //   "Breakfast",
  //   "Fast Food",
  //   "Main Course",
  //   "Deserts",
  //   "Drinks",
  // ];

  // const handleCategorySelect = (selectedCategory: string) => {
  //   setCategory(selectedCategory);
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Selected Category:", category);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // <main>
      <div className="flex flex-1 min-h-screen space-x-20 overflow-y-auto bg-white">
        <AddMenuSideBar />

        {/* Form */}
        <div className="flex-col  items-center mx-auto w-4/6  px-4 mb-4">
          <div className="justify-center ">
            <h2 className="text-right mt-4 cursor-pointer text-gray-700 text-xl">
              Save as Draft
            </h2>
            <h1 className="text-3xl font-bold mt-7">Basic Details</h1>
            <p className="text-base text-gray-700 mt-2">
              Share basic information about your menu item
            </p>

            {/* Form */}
            <form className="max-w-lg w-full space-y-6">
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Menu Name"
                  className="w-full p-3 focus:outline-green bg-light rounded-lg"
                />
              </div>
              <div>
                <label></label>
                <select className="w-full p-3 focus:outline-green bg-light rounded-lg">
                  <option value="">Select Category</option>
                  <option value="">Breakfast</option>
                  <option value="">Fast food</option>
                  <option value="">Main Course</option>
                  <option value="">Desserts</option>
                  <option value="">Drinks</option>
                </select>
                <div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-green text-base mt-2"
                  >
                    + Add Category
                  </button>
                  {/* Modal */}
                  <PopUp isOpen={isModalOpen} onClose={closeModal} />
                </div>
              </div>
              <div className="flex mt-0 relative items-center">
                <input
                  type="text"
                  placeholder="Menu Price"
                  className="w-full p-3 focus:outline-green bg-light rounded-lg"
                />
                <span className=" absolute right-4 text-green">NGN</span>
              </div>
              <input
                type="text"
                placeholder="Description (Optional)"
                className="w-full h-36 text-left p-3 focus:outline-green bg-light rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter Ready Time"
                className="w-full p-3 focus:outline-green bg-light rounded-lg"
              />
              <input
                type="text"
                placeholder="Minimum order criteria"
                className="w-full p-3 focus:outline-green bg-light rounded-lg"
              />
              <span className=" pt-2 text-[11px] text-gray-700">
                Set the minimum quantity or value required for customers to
                place an order.
              </span>
              <div className="flex justify-between">
                <span className="text-base font-medium">
                  Mark Item as Avaliable
                </span>
                <ToggleSwitch />
              </div>
            </form>
          </div>
        </div>
      </div>

          // </main>
  );
}

export default page;
