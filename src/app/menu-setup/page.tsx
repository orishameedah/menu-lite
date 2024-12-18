"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import burger from "public/assets/Ellipse 332.svg";
import upload from "public/assets/Upload.svg";
import more from "public/assets/more.svg";
import MenuSideBar from "@/components/MenuSideBar";
import BulkUploadModal from "@/components/BulkUploadModal";

const MenuPage = () => {
  const router = useRouter();
  const [showBulkModal, setShowBulkModal] = useState<boolean>(false)
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/basic-details");
  };
  const handleBulkUpload = () => {
    setShowBulkModal(!showBulkModal)
  }

  return (
    <>
    <div className="flex min-h-screen overflow-y-auto">
      {/* SideBar */}
      <MenuSideBar />

      {/* Content */}
      <div className="flex-1 py-8 px-6 overflow-y-auto">
        {/* Header */}
        <div className="bg-burgerlay py-6 w-full flex flex-col md:flex-row justify-between items-center rounded-lg mb-8">
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <Image
              src={burger}
              alt="Store Logo"
              className="ml-5 rounded-full"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Bob's Burgers</h1>
              <p className="text-sm">https://Bobsburgers.store/John</p>
            </div>
          </div>
          <div className="flex md:space-x-4 space-x-3 md:mr-5 mr-0">
            <button className="bg-white py-2 px-4 rounded-lg items-center">
              <span className="font-semibold">Share Store Link</span>
            </button>
            <button className="bg-white py-2 px-4 rounded-lg flex space-x-2 items-center">
              <Image src={more} alt="more" />
              <span className="font-semibold">Store Options</span>
            </button>
          </div>
        </div>

        {/* Menu Tab */}
        <div className="text-center mt-24">
          <h2 className="text-2xl font-bold">No Menu Item</h2>
          <p className="text-gray-600 text-base mt-2">
            Get started by setting up your menu items for customers to start{" "}
            <br className="hidden sm:inline" />
            making their orders from your store.
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-2/3 lg:w-1/2 mx-auto mt-24 space-y-3">
          <button
            onClick={handleSubmit}
            className="bg-green text-white px-6 font-semibold py-3 rounded-lg"
          >
            + Add Menu Item
          </button>
          <button className="border flex gap-2 font-semibold items-center justify-center border-green text-green px-6 py-3 rounded-lg"
          onClick={handleBulkUpload}>
            <Image src={upload} alt="upload" />
            Bulk Upload
          </button>
        </div>
      </div>
    </div>
    <BulkUploadModal
          isOpen={showBulkModal}
          onClose={() => setShowBulkModal(false)}
    />
    </>
  );
};

export default MenuPage;
