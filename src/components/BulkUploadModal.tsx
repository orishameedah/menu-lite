"use client";

import React, { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import { XIcon, UploadIcon } from "lucide-react";

interface BulkUploadModal {
  isOpen: boolean;
  onClose: () => void;
}

const BulkUploadModal: React.FC<BulkUploadModal> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const itemsData: any[] = [
    {
      menuName: "Jollof Rice",
      description: "Smoked africa",
      sellingPrice: 5600,
      category: "Main Course",
      allergens: "fish,onion",
      availability: true,
      preparationArea: "Kitchen"
    },
    {
      menuName: "Water",
      description: "Stream water",
      sellingPrice: 1600,
      category: "Add on",
      allergens: "",
      availability: true,
      preparationArea: "Bar"
    }
  ];

  const exportData = Array.isArray(itemsData)
    ? itemsData.map((item) => ({
        "Item Name": item.menuName || "Item Name",
        Description: item.description || "Description",
        Price: item?.sellingPrice || 0,
        Category: item.category || "Main Course",
        Allergens: item.allergens || "none",
        Availability: item.availability,
        "Preparation Area": item.preparationArea,
      }))
    : [];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'csv' || fileExtension === 'txt') {
        setFile(selectedFile);
      } else {
        alert('Please upload a .csv or .txt file');
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      const fileExtension = droppedFile.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'csv' || fileExtension === 'txt') {
        setFile(droppedFile);
      } else {
        alert('Please upload a .csv or .txt file');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-400">
      <div className="bg-white w-[60%] h-[65%] rounded-lg p-6 shadow-xl overflow-y-auto">
        <div></div>
        <div className="flex justify-end my-4">
          <button onClick={onClose} className="">
            <XIcon
              className="text-gray-200 bg-gray-400  w-6 h-6 rounded-full"
              size={22}
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-bold">Step 1</h1>
            <p className="text-base font-medium text-gray-600">Download our Cloud Kitchen menu list template file</p>
            <p className="text-sm font-normal text-gray-400">This file has correct customer headings. Bountip needs to import your Menu List</p>
          </div>

          <div className="items-center justify-center">
            <CSVLink data={exportData} filename={"Bountip-menu-temp.csv"}>
              <button className="text-green border-2 font-bold border-green rounded-lg px-4 py-2">
                Download CSV Template
              </button>
            </CSVLink>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex flex-col space-y-2 mt-3">
          <h1 className="text-xl font-bold">Step 2</h1>
          <p className="text-base font-medium text-gray-600">Copy or input your Menu list into the template</p>
          <p className="text-sm font-normal text-gray-400">
            Export your menu list from your old sytem as a comma seperated list. Using Email or another spreadsheet editor, 
            copy and paste your menu list from the exported file into the downloaded template. Make sure the menu list data you copy 
            matches the column headings provided in the template
          </p>
          <p className="text-xs font-normal p-1 rounded-lg text-red-600 bg-red-300">Do not change the column headings in the template file. These need to be unchanged for the upload to work in the next step</p>
          <p className="text-xs font-normal p-1 rounded-lg text-red-600 bg-red-300">To upload multiple menu, please fill out the fields for each menu item. Make sure the Menu Name matched the name used when the menu item was created</p>
        </div>
        <hr className="mt-2 border" />
        <div className="flex flex-col space-y-2 mt-3">
          <h1 className="text-xl font-bold">Step 3</h1>
          <p className="text-base font-medium text-gray-600">Upload the updated template file</p>
          <p className="text-sm font-normal text-gray-400">
            The file you import/upload must be a CSV file. Meaning that the name of your file should either be .csv or .txt
          </p>
          <div
            className="w-full p-8 border border-dashed rounded-lg border-green items-center text-md justify-center cursor-pointer"
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {file ? (
              <div className="flex items-center justify-center">
                {/* <UploadIcon className="mr-2" /> */}
                <span>{file.name}</span>
              </div>
            ) : (
              <div className="text-center">
                Drop files here or click <span className="text-green">upload</span>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".csv,.txt"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default BulkUploadModal;

